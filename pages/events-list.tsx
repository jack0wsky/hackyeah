import Layout from "../components/shared/layout";
import Filters from "../components/events-list/filters";
import List from "../components/events-list/list";

const EventsList = () => {
  return (
    <Layout title="Events">
      <main className="screen-size flex flex-col">
        <Filters />

        <List />
      </main>
    </Layout>
  );
};

export default EventsList;
