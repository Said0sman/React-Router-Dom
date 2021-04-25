import Title from '../components/Title';
import Lorem from '../components/Lorem';



export default function Home(){
  const title = "Title"
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestiae doloribus cumque maxime perferendis aliquam dignissimos? Dicta consequuntur dolor unde suscipit maiores voluptatibus sequi ea, delectus omnis assumenda aut rem"
  
  
  return (
        <>
          <Title name="Home" />
          <Lorem title={title} text={text} />
        </>
      )
};