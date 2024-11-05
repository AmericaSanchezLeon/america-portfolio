

export default function Loader() {


      return (
        <div>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={[colors.primary, colors.secondary, colors.pink, colors.yellow, colors.accent, colors.green]} 
          />
        </div>
      );
    }

