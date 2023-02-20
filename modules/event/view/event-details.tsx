import Layout from "../../shared/layout";
import Link from "next/link";

export const EventDetailsPage = () => {
  return (
    <Layout title="Event">
      <main className="screen-size">
        <Link href="/">Less waste events</Link>
        <div>event</div>
      </main>
    </Layout>
  );
};
