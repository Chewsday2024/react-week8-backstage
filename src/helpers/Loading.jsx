import ReactLoading from 'react-loading';
import useHelpers from './contextprovider/useHelpers';







function Loading () {
  const { isLoading } = useHelpers();
  return (
    <>
      {isLoading && 
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(130, 130, 130, 0.42)",
            zIndex: 999,
          }}
        >
          <ReactLoading type="spin" color="black" width="4rem" height="4rem" />
        </div>
      }
    </>
  );
};

export default Loading;