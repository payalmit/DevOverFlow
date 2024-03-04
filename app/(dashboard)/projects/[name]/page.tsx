export default function ProjectDetails({ params }) {
  return (
    <div>
      <h1 className="h1-bold flex flex-col justify-center items-center">
        Project {params.name}
      </h1>
    </div>
  );
}
