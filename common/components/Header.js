import MainSearch from './MainSearch.js'
import colormode from './colormode.js'
import { Breadcrumbs } from './Breadcrumbs.js'

export function Header() {
  return (
  <header>
    <nav id="sidenav-1" className="sidenav bg-primary" data-mdb-hidden="true">
      <ul className="sidenav-menu">
        <li className="sidenav-item">
          <a className="sidenav-link">
            <i className="fas fa-home fa-fw me-3" style={{color: "white"}}></i><span>Main Dashboard</span></a>
        </li>
        <li className="sidenav-item">
          <a className="sidenav-link"><i className="fas fa-users fa-fw me-3"
              style={{color: "white"}}></i><span>Customers</span></a>
          <ul className="sidenav-collapse">
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/customers/customers">Customers</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/customers/segments">Segments</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/customers/reviews">Reviews</a>
            </li><br />
          </ul>
        </li>

        <li className="sidenav-item">
          <a className="sidenav-link" style={{color: "white"}} href="">
            <i className="fab fa-slideshare fa-fw me-3" style={{color: "white"}}></i><span>Marketing</span></a>
          <ul className="sidenav-collapse">
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/marketing/events">Events</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/marketing/newsletter">Newsletter</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/marketing/rewards">Rewards</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/marketing/visits">Visits</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/marketing/agreements">Agreements</a>
            </li><br />
          </ul>
        </li>
        <li className="sidenav-item">
          <a className="sidenav-link" style={{color: "white"}} href="">
            <i className="fas fa-chart-pie fa-fw me-3" style={{color: "white"}}></i><span>Reports</span></a>
          <ul className="sidenav-collapse">
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/reports/eosr">End of Shift Reports</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/reports/cases">Cases</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/reports/team-scheduler">Team Scheduler</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/reports/dashboards">Dashboards</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/reports/ooto">Out of the Office Reporting
                Tool</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/reports/tickets">Ticket Management</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/reports/checklists">Checklists</a>
            </li><br />
          </ul>
        </li>
        <li className="sidenav-item">
          <a className="sidenav-link" style={{color: "white"}} href="">
            <i className="fas fa-edit fa-fw me-3" style={{color: "white"}}></i><span>Content Management</span></a>
          <ul className="sidenav-collapse">
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/content/pages">Pages</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/content/blog">Blog</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/content/categories">Categories</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/content/media-manager">Media Manager</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/content/tags">Tags</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/content/glossary">Glossary</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/content/projects">Projects</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/content/websites">Websites</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/content/workspaces">Workspaces</a>
            </li><br />
          </ul>
        </li>
        <li className="sidenav-item">
          <a className="sidenav-link" style={{color: "white"}} href="">
            <i className="fas fa-shopping-basket fa-fw me-3" style={{color: "white"}}></i><span>Inventory</span></a>
          <ul className="sidenav-collapse">
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/products">Products</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/product-types">Product Types</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/collections">Collections</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/brands">Brands</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/manufacturers">Manufacturers</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/attributes">Attributes</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/vendors">Multi-Vendor</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/partners">Partners</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/warehouses">Warehouses</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/wishlists">Wishlists</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/orders">Orders</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/invoices">Invoices</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/shipments">Shipments</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/returns">Returns</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/transactions">Transactions</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/discounts">Discounts</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/inventory/quotes">Quotes</a>
            </li><br />
          </ul>
        </li>
        <hr style={{color: "white"}} />
        <h6 style={{color: "white", width:"100%", textAlign:"left", paddingLeft: "20px"}}>General</h6>
        <li className="sidenav-item">
          <a className="sidenav-link" style={{color: "white"}} href="">
            <i className="fas fa-cogs fa-fw me-3" style={{color: "white"}}></i><span>System</span></a>
          <ul className="sidenav-collapse">
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/system/general-settings">General Settings</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/system/integrations">Integrations</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/system/role-manager">Role Manager</a>
            </li><br />
            <li className="sidenav-item">
              <a className="sidenav-link" style={{color: "white"}} href="/admin/system/devcenter">Developer Center</a>
            </li><br />
          </ul>
        </li>
        <li className="sidenav-item">
          <a className="sidenav-link" style={{color: "white"}} href="">
            <i className="fas fa-calendar fa-fw me-3" style={{color: "white"}}></i><span>Profile</span></a>
        </li>
      </ul>
    </nav>

    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-primary fixed-top" style={{zIndex: "999999"}}>
      <div className="container-fluid">
        <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" className="btn btn-primary"
          aria-controls="#sidenav-1" aria-haspopup="true">
          <i className="fas fa-bars"> Menu</i>
        </button>
        <a className="navbar-brand" href="/">
          <div className="metroname" style={{color: "orange"}}>ALTERNATE</div>
          <div className="metroname" style={{color: "powderblue"}}>CMS</div>
        </a>
         
        <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
          
        </div>

        <ul className="navbar-nav ms-auto d-flex flex-row">
         {/*} <colormode />
      <li className="nav-item dropdown">
            <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
              role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Some news</a></li>
              <li><a className="dropdown-item" href="#">Another news</a></li>
              <li>
                <a className="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button"
              data-mdb-toggle="dropdown" aria-expanded="false">
              <i className="flag-united-kingdom flag m-0"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#"><i className="flag-united-kingdom flag"></i>English
                  <i className="fa fa-check text-success ms-2"></i></a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-poland flag"></i>Polski</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-china flag"></i>中文</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-japan flag"></i>日本語</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-germany flag"></i>Deutsch</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-spain flag"></i>Español</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-russia flag"></i>Русский</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-portugal flag"></i>Português</a>
              </li>
            </ul>
  </li> */}

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
              id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <img className="rounded-circle fas fa-user-circle" height="22"
                alt="" loading="lazy" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/user/my-account">My Profile</a>
              </li>
              <li>
                <a className="dropdown-item" target="_blank" href="/admin/">Customer View</a>
              </li>
              <li>
                <a className="dropdown-item" style={{color: "red"}} href="/admin/system/devcenter">Developer Center</a>
              </li>
              <li>
                <a className="dropdown-item" aria-current="page">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    
  </header>
)
}

export default Header

