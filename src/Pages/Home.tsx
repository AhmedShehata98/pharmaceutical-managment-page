import React from "react";
import DrugAddBox from "../components/DrugAddBox";
import DrugsSearchBox from "../components/DrugsSearchBox";
import PharmaceuticalTable from "../components/PharmaceuticalTable";

const Home = () => {
  return (
    <main className="bg-zinc-50 w-full min-h-screen py-3">
      <section className="container mx-auto h-full">
        <DrugAddBox />
        <DrugsSearchBox />
        <PharmaceuticalTable />
      </section>
    </main>
  );
};

export default Home;
