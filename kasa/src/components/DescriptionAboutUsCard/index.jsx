// import { useState } from 'react'
// import arrowup from '../../assets/arrow_up.svg'
// import arrowdown from '../../assets/arrow_down.svg'

// import './index.scss'

// // const aboutUsText = [
// //     {
// //         "id": "0074",
// //         "title" : "Fiabilité",
// //         "description" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
// //     },
// //     {
// //         "id": "0747",
// //         "title" : "Respect",
// //         "description" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
// //     },
// //     {
// //         "id": "0551",
// //         "title" : "Service",
// //         "description" : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
// //     },
// //     {
// //         "id": "0920",
// //         "title" : "Sécurité",
// //         "description" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
// //     }
// // ]

// function DescriptionAboutUsCard({title, description}) {
//     const [isOpen, setIsOpen] = useState(false)
        
//     // return isOpen ? (
//     return (
//         <section>
//             {aboutUsText.map((aboutUsText) => (
//                 <div className='aboutUsCard'>
//                     <div className='aboutUsCard__titlecontainer'>
//                         <h2 className='aboutUsCard__title' key={`${aboutUsText.id}-${aboutUsText.title}`}>{aboutUsText.title}</h2>
//                         <button className='btnarrow btnarrow--down' onclick={() => setIsOpen(true)}>
//                             <img src={ arrowdown } className='btnarrow__img--down' />
//                         </button>
//                         <button className='btnarrow btnarrow--up' onclick={() => setIsOpen(false)}>
//                             <img src={ arrowup } className='btnarrow__img--up' />
//                         </button>
//                     </div>
//                     <p className="aboutUsCard__paragraph" key={`${aboutUsText.id}-${aboutUsText.description}`}>{ aboutUsText.description}</p>
//                 </div>
//             ))}

            
//         </section>
//     )
// }

// export default DescriptionAboutUsCard