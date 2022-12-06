import "reflect-metadata";

import { buildSchema } from "type-graphql";
import * as path from "path";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from 'apollo-server-micro';

import { resolvers } from "../../prisma/generated/type-graphql";

import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

// Graphql server with Typgraphql, Prisma, and Apollo integration
export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
        'Access-Control-Allow-Origin',
        'https://studio.apollographql.com'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    if (req.method === 'OPTIONS') {
        res.end();
        return false;
    }
    const prisma = new PrismaClient();
  
      const typeSchema = await buildSchema({
          resolvers,
          emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
          validate: false,
      });
  
    const apolloServer = new ApolloServer({
      schema: typeSchema,
      context: () => ({ prisma }),
    });

    const startServer = apolloServer.start();

    await startServer;
  
    return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
  };