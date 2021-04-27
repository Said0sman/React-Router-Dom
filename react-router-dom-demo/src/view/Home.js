import Title from "../components/Title";
import Lorem from "../components/Lorem";
import ImagesSection from "../components/ImageSection";
import imageSrc from "../Global/img/combine.1.png";

export default function Home() {
  const title = "Title";
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestiae doloribus cumque maxime perferendis aliquam dignissimos? Dicta consequuntur dolor unde suscipit maiores voluptatibus sequi ea, delectus omnis assumenda aut rem";

  let imageTitle = "Tärningar";
  let imageAlt = "bild på två tärningar";

  return (
    <>
      <Title name="Home" />
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
