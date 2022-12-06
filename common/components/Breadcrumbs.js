import {Breadcrumbs} from 'react-breadcrumbs-dynamic'

  export function BreadcrumbsMenu() {
    return (
      <div>
        <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white breadcrumbImage">
          <Breadcrumbs separator={<b> / </b>} item={NavLink} finalItem={'b'} finalProps={{style: {color: 'red'}}} />
        </div>
      </div>
    )
    }
