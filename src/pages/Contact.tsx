import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { ContactFormInputs } from "../type";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    alert(`Thank you, ${data.name}! Your message has been received.`);
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Your name"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Your email"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Minimum 10 characters" },
          })}
          placeholder="Your message"
          rows={4}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
