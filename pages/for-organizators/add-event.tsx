import Layout from "../../components/shared/layout";
import Input from "../../components/shared/input";
import { useFormik } from "formik";

const AddEvent = () => {
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      eventName: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      location: "",
      description: "",
      items: [],
    },
    onSubmit: () => {},
  });

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
            <textarea className="border-1 border-black w-full resize-none md:max-w-[300px]" />
          </label>
        </form>
      </main>
    </Layout>
  );
};

export default AddEvent;
