import Title from "../components/Title";
import Lorem from "../components/Lorem";
import ImagesSection from "../components/ImageSection";
import imageSrc from "../Global/img/project.1.jpg";

export default function Project() {
  const sideName = "Project";

  const title = "Title";
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestiae doloribus cumque maxime perferendis aliquam dignissimos? Dicta consequuntur dolor unde suscipit maiores voluptatibus sequi ea, delectus omnis assumenda aut rem";

  let imageTitle = "Project bild";
  let imageAlt = "Bild på project puzzel";

  return (
    <>
      <Title name="Project" />
      <Lorem title={title} text={text} />
      <ImagesSection
        imageTitle={imageTitle}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
      <Lorem title={title} text={text} />
    </>
  );
}
