import Layout from "../../components/shared/layout";
import Input from "../../components/shared/input";
import { useFormik } from "formik";
import Button from "../../components/shared/button";

const AddEvent = () => {
  const { values, handleChange, handleSubmit, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        eventName: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        location: "",
        description: "",
        item: {
          name: "",
          type: "",
          quantity: "",
          dateFrom: "",
          timeFrom: "",
          dateTo: "",
          timeTo: "",
          isHidden: false,
        },
        items: [],
      },
      onSubmit: () => {},
    });

  console.log(values);

  const addItem = () => {
    setFieldValue("items", [values.item, ...values.items]);
    setFieldValue("item", {
      name: "",
      type: "",
      quantity: "",
      dateFrom: "",
      timeFrom: "",
      dateTo: "",
      timeTo: "",
      isHidden: false,
    });
  };

  return (
    <Layout title="Add event">
      <main className="screen-size">
        <h1>Add new event</h1>
        <form>
          <div className="w-[342px] h-[140px] flex justify-center items-center bg-[#6C38FF] text-white">
            <p>Add cover graphic</p>
          </div>

          <p>
            The file should end in: .jpg, .jpeg or .png and has less than 15MB
          </p>

          <h2 className="mt-44">Details</h2>

          <Input
            label="Event name"
            onChange={handleChange}
            value={values.eventName}
            type="text"
            placeholder=""
            name="eventName"
            error={
              errors.eventName && touched.eventName ? errors.eventName : null
            }
          />

          <div className="flex gap-x-12">
            <Input
              label="Event start date"
              onChange={handleChange}
              value={values.startDate}
              type="date"
              placeholder=""
              name="startDate"
              error={
                errors.startDate && touched.startDate ? errors.startDate : null
              }
            />
            <Input
              label="Event start time"
              onChange={handleChange}
              value={values.startTime}
              type="time"
              placeholder=""
              name="startTime"
              error={
                errors.startTime && touched.startTime ? errors.startTime : null
              }
            />
          </div>

          <div className="flex gap-x-12">
            <Input
              label="Event end date"
              onChange={handleChange}
              value={values.endDate}
              type="date"
              placeholder=""
              name="endDate"
              error={errors.endDate && touched.endDate ? errors.endDate : null}
            />
            <Input
              label="Event end time"
              onChange={handleChange}
              value={values.endTime}
              type="time"
              placeholder=""
              name="endTime"
              error={errors.endTime && touched.endTime ? errors.endTime : null}
            />
          </div>

          <Input
            label="Location"
            onChange={handleChange}
            value={values.location}
            type="text"
            placeholder=""
            name="location"
            error={errors.location && touched.location ? errors.location : null}
          />

          <label>
            <p>Description</p>
            <textarea
              value={values.description}
              onChange={handleChange}
              name="description"
              className="border-1 border-black w-full resize-none md:max-w-[300px] h-[147px] p-8"
            />
          </label>

          <section>
            <h3>Waste</h3>
            <table className="w-full flex flex-col">
              <thead className="flex justify-between w-full">
                <tr className="w-full flex justify-between">
                  <th>Name</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Collection time</th>
                </tr>
              </thead>
              <tbody className="w-full flex justify-between"></tbody>
            </table>
            <div className="flex justify-between bg-primary-blue/10 p-12">
              <input
                placeholder="Name"
                value={values.item.name}
                name="item.name"
                onChange={handleChange}
              />
              <input
                placeholder="type"
                value={values.item.type}
                name="item.type"
                onChange={handleChange}
              />
              <input
                placeholder="quantity"
                value={values.item.quantity}
                name="item.quantity"
                onChange={handleChange}
              />

              <input
                placeholder="01-01-1990"
                value={values.item.dateFrom}
                type="date"
                name="item.dateFrom"
                onChange={handleChange}
              />
              <input
                placeholder="01-01-1990"
                value={values.item.timeFrom}
                type="time"
                name="item.timeFrom"
                onChange={handleChange}
              />
              <p>to</p>

              <input
                placeholder="01-01-1990"
                value={values.item.dateTo}
                type="date"
                name="item.dateTo"
                onChange={handleChange}
              />
              <input
                placeholder="01-01-1990"
                value={values.item.timeTo}
                type="time"
                name="item.timeTo"
                onChange={handleChange}
              />
              <label>
                <input
                  type="checkbox"
                  checked={values.item.isHidden}
                  name="item.isHidden"
                  onChange={handleChange}
                />
                Hidden
              </label>

              <Button variant="primary" onClick={addItem}>
                Save
              </Button>
            </div>
          </section>
        </form>
      </main>
    </Layout>
  );
};

export default AddEvent;

/*
 {values.items.map((item) => (
                  <tr className="w-full flex justify-between" key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
 */
