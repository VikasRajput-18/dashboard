import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <main className="">
      <Sidebar />
      <section className="ml-0 lg:ml-[300px] bg-[#F5F6F8]  min-h-screen h-full p-4 md:p-8">
        <Dashboard />
      </section>
    </main>
  );
};

export default App;
