
import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors= {[
          '#BF7802', // $yellow
          '#CB5C47', // $orange
          '#E04F88', // $pink
          '#8558C8', // $purple
          '#5881CB', // $periwinkle
          '#86991C', // $green
        ]}
      />
    </>
  );
}


