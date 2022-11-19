import Layout from "../components/shared/layout";
import Filters from "../components/events-list/filters";

const EventsList = () => {
  return (
    <Layout>
      <main className="screen-size flex flex-col">
        <Filters />
      </main>
    </Layout>
  );
};

export default EventsList;
