import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useState } from "react";

const MultistepForm = () => {
    
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    }

    const backStep = () => {
        if(currentStep > 1) setCurrentStep(currentStep - 1);
    }

  return (
    <div className="form-container">
        <div className="progress-bar">
            <div className={`step ${currentStep >= 1 ? "active": ""} `}>1</div>
            <div className={`step ${currentStep >= 2 ? "active": ""} `}>2</div>
            <div className={`step ${currentStep >= 3 ? "active": ""} `}>3</div>
        </div>

        {currentStep === 1 && <Step1 nextStep = {nextStep} />}
        {currentStep === 2 && <Step2  nextStep= {nextStep} backStep={backStep}/>}
        {currentStep === 3 && <Step3 backStep={backStep}/>}
    </div>
  )
}

export default MultistepForm;








// 



// import { useEffect, useState } from "react";
// import Pagination from "./Components/Pagination";
// import ProductCard from "./Components/ProductCard";
// import { PAGE_SIZE } from "./constants";
// import "./styles.css";

// export default function App() {
//   const [products, setProducts] = useState([]);

//   // current page maintain
//   const [currentPage, setCurrentPage] = useState(0);

//   const fetchData = async () => {
//     const data = await fetch("https://dummyjson.com/products?limit=500");
//     const json = await data.json();
//     setProducts(json.products);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // const PAGE_SIZE = 10;
//   const totalProducts = products.length;
//   console.log(totalProducts);
//   const nuOfPages = Math.ceil(totalProducts / PAGE_SIZE);
//   // console.log(nuOfPages);
//   const start = currentPage * PAGE_SIZE;
//   const end = start + PAGE_SIZE;

//   const handlePageChange = (n) => {
//     console.log(n, "pagesss");
//     setCurrentPage(n);
//   };

//   const goToNextPage = () => {
//     setCurrentPage((prev) => prev + 1);
//   };

//   const goToPrevPage = () => {
//     setCurrentPage((prev) => prev - 1);
//   };

//   return !products.length ? (
//     <h1> No Proudct Found </h1>
//   ) : (
//     <div className="App">
//       <h1>Pagination</h1>

//       <div className="products-container">
//         {products.slice(start, end).map((p) => (
//           <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
//         ))}
//       </div>
//       {/* pagination ui  */}
//       <Pagination
//         goToNextPage={goToNextPage}
//         goToPrevPage={goToPrevPage}
//         handlePageChange={handlePageChange}
//         nuOfPages={nuOfPages}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { PAGE_SIZE } from "./constants";
// import "./styles.css";

// const ProductCard = ({ image, title }) => {
//   return (
//     <div className="product-card">
//       <img src={image} alt={title} />
//       <span>{title}</span>
//     </div>
//   );
// };

// export default function App() {
//   const [products, setProducts] = useState([]);

//   // current page maintain
//   const [currentPage, setCurrentPage] = useState(0);

//   const fetchData = async () => {
//     const data = await fetch("https://dummyjson.com/products?limit=500");
//     const json = await data.json();
//     setProducts(json.products);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // const PAGE_SIZE = 10;
//   const totalProducts = products.length;
//   console.log(totalProducts);
//   const nuOfPages = Math.ceil(totalProducts / PAGE_SIZE);
//   // console.log(nuOfPages);
//   const start = currentPage * PAGE_SIZE;
//   const end = start + PAGE_SIZE;

//   const handlePageChange = (n) => {
//     console.log(n, "pagesss");
//     setCurrentPage(n);
//   };

//   const goToNextPage = () => {
//     setCurrentPage((prev) => prev + 1);
//   };

//   const goToPrevPage = () => {
//     setCurrentPage((prev) => prev - 1);
//   };

//   return !products.length ? (
//     <h1> No Proudct Found </h1>
//   ) : (
//     <div className="App">
//       <h1>Pagination</h1>

//       <div className="products-container">
//         {products.slice(start, end).map((p) => (
//           <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
//         ))}
//       </div>
//       {/* pagination ui  */}
//       <div className="pagination-container">
//         <button
//           disabled={currentPage === 0}
//           className="page-number"
//           onClick={() => goToPrevPage()}
//         >
//           ⬅️
//         </button>
//         {[...Array(nuOfPages).keys()].map((n) => (
//           <span
//             // className="page-number active"
//             className={"page-number " + (n === currentPage ? "active" : "")}
//             key={n}
//             onClick={() => handlePageChange(n)}
//           >
//             {n}
//           </span>
//         ))}
//         <button
//           disabled={currentPage === nuOfPages - 1}
//           className="page-number"
//           onClick={() => goToNextPage()}
//         >
//           ➡️
//         </button>
//       </div>
//     </div>
//   );
// }
