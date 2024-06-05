import { useDispatch, useSelector } from "react-redux";
import AppRoutes from "../../AppRoutes";
import { setModalContent, setModalStatus } from "../../redux/camperSlice";
import { selectOpenModal } from "../../redux/selector";
import Modal from "../Modal/Modal";

function App() {
  const modalStatus = useSelector(selectOpenModal);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent({ action: null, recordDataEdit: null }));
  };
  return (
    <div className="App">
      <AppRoutes />
      <Modal open={modalStatus} onClose={handleCloseModal}>
        <p>Hello world</p>
      </Modal>
    </div>
  );
}
export default App;
