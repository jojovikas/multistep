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
