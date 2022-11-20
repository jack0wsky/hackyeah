import Layout from "../../components/shared/layout";
import Link from "next/link";

const EventId = () => {
  return (
    <Layout title="Event">
      <main className="screen-size">
        <Link href="/">Less waste events</Link>
        <div>event</div>
      </main>
    </Layout>
  );
};

export default EventId;
