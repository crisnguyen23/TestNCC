import { Header, Sidebar, Content, Footer } from "./components";

function App() {
  return (
    <main className="wrapper">
      <Sidebar />
      <div className="container">
        <div className="main-content">
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
