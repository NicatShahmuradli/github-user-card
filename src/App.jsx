import "./App.css";
import {
  CForm,
  CFormInput,
  CCard,
  CCardImage,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CCardBody,
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from "@coreui/react";

import "@coreui/coreui/dist/css/coreui.min.css";
import { useState } from "react";
import { getUser } from "./api/index";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [searchData, setSearchData] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await getUser(searchData);

    setCurrentUser(user);
  };

  return (
    <>
      <div className="container">
        <CForm className="search">
          <CFormInput type="text" id="Search" placeholder="username" value={searchData} onChange={(e) => setSearchData(e.target.value)}/>
          <CButton onClick={(e) => handleSubmit(e)}>Submit</CButton>

        </CForm>

        <CCard className="card" style={{ width: "18rem" }}>
          <CCardImage
            orientation="top"
            src={
              "https://pbs.twimg.com/profile_images/1486344252409929730/C0uUMGmZ_400x400.jpg"
            }
          />
          <CCardBody>
            <CCardTitle>{currentUser.name}</CCardTitle>
            <CCardText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illum? </CCardText>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
              <CButton href="{currentUser.url}">go to Github page</CButton>
            </CListGroupItem>
            <CListGroupItem>
              <CButton href="{currentUser.followers_url}">Followers</CButton>
            </CListGroupItem>
          </CListGroup>
          <CCardBody>
            <CButton>Add Table</CButton>
          </CCardBody>
        </CCard>

        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </>
  );
}

export default App;
