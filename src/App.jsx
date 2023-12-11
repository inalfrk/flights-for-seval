import { useEffect, useState } from "react";
import Header from "./componets/Header";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import SideDetail from "./componets/SideDetail";

function App() {
  const [showMapView, setShowMapView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    /* 5 saniyede bir uçuş hareketleri güncellenir */
    const ref = setInterval(() => {
      dispatch(getFlights());
    }, 5000);

    /* kullanıcı farklı bir sayfaya geçince tekrarı durdurur */
    return () => {
      clearInterval(ref);
    };
  }, []);

  /* modal açmak için */
  const openModal = (id) => {
    /* detayı gösterilecek uçağın aid'si */
    setDetailId(id);
    /* modalı açar */
    setShowDetail(true);
  };

  return (
    <>
      <Header />
      <MapView openModal={openModal} />
      {showDetail && (
        <SideDetail detailId={detailId} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
