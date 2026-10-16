import { useRef, useState, useEffect } from "react";
import Quill from "quill";
import { JobCategories, JobLevels, JobLocations } from "../../assets/assets";
import { toast } from "react-toastify";
import { usePostJob } from "../../hooks/useCompany";

const initialFormData = {
  title: "",
  description: "",
  location: "",
  category: "",
  level: "",
  salary: 0,
};

const AddJob = () => {
  const [formData, setFormData] = useState(initialFormData);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "salary" ? Number(value) : value,
    }));
  };

  const postJobMutation = usePostJob();

  const resetForm = () => {
    setFormData(initialFormData);

    if (quillRef.current) {
      quillRef.current.setText("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        description: quillRef.current?.root.innerHTML || "",
      };

      await postJobMutation.mutateAsync(payload);

      toast.success("Job created successfully");
      resetForm();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to complete your request.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container p-4 flex flex-col w-full items-start gap-3"
    >
      <div className="w-full">
        <label className="mb-2 block" htmlFor="title">
          Job Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Software Developer"
          onChange={handleChange}
          value={formData.title}
          required
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
        />
      </div>
      <div className="w-full max-w-lg">
        <p className="my-2">Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <label className="mb-2 block" htmlFor="location">
            Job Location
          </label>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            {JobLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block" htmlFor="category">
            Job Category
          </label>

          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {JobCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block" htmlFor="level">
            Job Level
          </label>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            name="level"
            value={formData.level}
            onChange={handleChange}
          >
            {JobLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block mb-2" htmlFor="title">
          Job Salary
        </label>
        <input
          className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-30"
          id="salary"
          name="salary"
          type="number"
          placeholder="0"
          min={0}
          onChange={handleChange}
          value={formData.salary}
          required
        />
      </div>

      <button className="w-28 py-3 mt-4 bg-black text-white rounded">
        Add
      </button>
    </form>
  );
};

export default AddJob;
