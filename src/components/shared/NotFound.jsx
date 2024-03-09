import { useNavigate } from 'react-router-dom';
import SecondaryButton from './SecondaryButton.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import { ArrowLeftIcon, HomeIcon } from 'lucide-react';

const NotFound=()=> {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="mx-auto md:my-auto w-full">
      <div className="sm:my-0 lg:my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <img
            src="https://illustrations.popsy.co/white/resistance-band.svg"
            alt="question-mark"
            className="h-[300px] w-auto"
          />
          <div>
            {/*<p className="mt-6 text-sm font-semibold text-black">404 error</p>*/}
            <div className="glitch-wrapper">
              <div className="glitch" data-glitch="404">404</div>
            </div>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              We can&apos;t find that page
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="mt-6 flex items-center space-x-3">
              <SecondaryButton
                text="Go Back"
                onClick={() => handleGoBack()}
                leftIcon={<ArrowLeftIcon size={16} className="mr-2"/>}
              />
              <PrimaryButton
                text="Go Home"
                leftIcon={<HomeIcon size={16} className="mr-2"/>}
                onClick={() => {
                  navigate('/');
                }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;