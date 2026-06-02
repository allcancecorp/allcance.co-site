import preloader from '../assets/images/preloader.gif';

// ------------

type LoaderProps = {
  fadeOffLoader: boolean;
};

function Loader({ fadeOffLoader }: LoaderProps) {
  return (
    <div className={'preloader ' + (fadeOffLoader ? 'fadeOff' : '')}>
      <img src={preloader} alt="Allcance" />
    </div>
  );
}
export default Loader;
