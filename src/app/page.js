import Image from "next/image";
import logo from "./logo.jpg";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse bg-dark-blue"
          >
            <div className="position-sticky pt-3 sidebar-sticky text-center">
              <Image src={logo} width={150} height={150} alt="Logo Labit" />
              <ul className="nav flex-column">
                <li className="nav-item my-3">
                  <a
                    className="nav-link btn btn-primary btn-dark-blue current-page"
                    href="#"
                  >
                    Pemrograman Dasar
                  </a>
                </li>
                <li className="nav-item my-3">
                  <a
                    className="nav-link btn btn-primary btn-dark-blue"
                    href="#"
                  >
                    Pemrograman Lanjut
                  </a>
                </li>
                <li className="nav-item my-3">
                  <a
                    className="nav-link btn btn-primary btn-dark-blue"
                    href="#"
                  >
                    Pemrograman OOP
                  </a>
                </li>
                <li className="nav-item my-3">
                  <a
                    className="nav-link btn btn-primary btn-dark-blue"
                    href="#"
                  >
                    Struktur Data
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5">
            <header>
              <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler d-block"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 text-black">
                      <li className="nav-item mx-4">
                        <a className="nav-link" href="#">
                          HOME
                        </a>
                      </li>
                      <li className="nav-item mx-4">
                        <a className="nav-link" href="#">
                          ABOUT US
                        </a>
                      </li>
                      <li className="nav-item mx-4">
                        <a className="nav-link" href="#">
                          OTHER SYSTEM
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>

            {/* <body> */}
            <div class="bg-white rounded-3 mt-5">
              <div class="p-5">
                <h1 class="mb-3">Content</h1>
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item border mb-3 rounded-3">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first
                        item's accordion body.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border mb-3 rounded-3">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        item's accordion body. Let's imagine this being filled
                        with some actual content.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border mb-3 rounded-3">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </body> */}

            {/* <h2>Section title</h2> */}
            {/* <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>text</td>
                    <td>random</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>placeholder</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>placeholder</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>irrelevant</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>text</td>
                    <td>placeholder</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>random</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
}
