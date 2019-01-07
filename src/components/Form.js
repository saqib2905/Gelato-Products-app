import React from 'react';

const Form = ({onChange, requestData}) => {
    return (
        <form>
        <h3>Select a product to see details</h3>
        <select onChange={onChange}>
          <option value="0">Select :</option>
          <option value="cards_pf_bc_pt_350-gsm-coated-silk_cl_4-4_ct_glossy-lamination_ver_variable">Product UID 1</option>
          <option value="cards_pf_bc_pt_350-gsm-coated-silk_cl_4-4_ct_glossy-lamination_hor_variable"> Product UID 2</option>
          <option value="cards_pf_a5_pt_350-gsm-coated-silk_cl_4-4_ver">Product UID 3</option>
          <option value="cards_pf_a5_pt_350-gsm-coated-silk_cl_4-4_hor">Product UID 4</option>
        </select>
        <button type="submit" onClick={requestData}>submit</button>
        </form> 
    );
}

export default Form;
