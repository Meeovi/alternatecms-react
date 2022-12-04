
import charts from '../common/components/dashboard/charts/charts'
import Customerslimit from '../common/components/customerslimit'
import Newcustomers from '../common/components/newcustomers'
import Reviewslimit from '../common/components/reviewslimit'
import Posts from '../common/components/dashboard/posts/posts'
import Sales from '../common/components/dashboard/sales/sales'
import Projects from '../common/components/dashboard/projects/projects'
import Mostviewed from '../common/components/dashboard/mostviewed/mostviewed'
import Bestsellers from '../common/components/dashboard/bestsellers/bestsellers'

export default function Home() {
  return (
    <div>
      <div className="row">
      <div className="welcomebanner">
        <p>Welcome to AlternateCMS</p>
      </div><br/>
      <Sales />
      <Projects />
      <Posts />
    </div>
    <ul id="ex1" className="nav nav-pills nav-fill mb-3" role="tablist">
      <li className="nav-item" role="presentation">
        <a id="ex2-tab-1" className="nav-link active" data-mdb-toggle="pill" href="#ex2-pills-1" role="tab"
          aria-controls="ex2-pills-1" aria-selected="true">Best Sellers</a>
      </li>
      <li className="nav-item" role="presentation">
        <a id="ex2-tab-2" className="nav-link" data-mdb-toggle="pill" href="#ex2-pills-2" role="tab"
          aria-controls="ex2-pills-2" aria-selected="false">Most Viewed Products</a>
      </li>
      <li className="nav-item" role="presentation">
        <a id="ex2-tab-3" className="nav-link" data-mdb-toggle="pill" href="#ex2-pills-3" role="tab"
          aria-controls="ex2-pills-3" aria-selected="false">New Customers</a>
      </li>
      <li className="nav-item" role="presentation">
        <a id="ex2-tab-4" className="nav-link" data-mdb-toggle="pill" href="#ex2-pills-4" role="tab"
          aria-controls="ex2-pills-4" aria-selected="false">Customers</a>
      </li>
      <li className="nav-item" role="presentation">
        <a id="ex2-tab-5" className="nav-link" data-mdb-toggle="pill" href="#ex2-pills-5" role="tab"
          aria-controls="ex2-pills-5" aria-selected="false">Reviews</a>
      </li>
    </ul>

    <div id="ex2-content" className="tab-content">
      <div id="ex2-pills-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="ex2-tab-1">
        <Bestsellers />
      </div>
      <div id="ex2-pills-2" className="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-2">
        <Mostviewed />
      </div>
      <div id="ex2-pills-3" className="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-3">
        <Newcustomers />
      </div>
      <div id="ex2-pills-4" className="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-4">
        <Customerslimit />
      </div>
      <div id="ex2-pills-5" className="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-5">
        <Reviewslimit />
      </div>
    </div>
    </div>
  )
}
