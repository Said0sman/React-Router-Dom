export default function ImagesSection(props){
    const { imageTitle, imageSrc, imageAlt } = props;

     return (
         <section>
             <h2>{ imageTitle }</h2>
             <img src={imageSrc} alt={imageAlt} />
         </section>
     ) 
 

};