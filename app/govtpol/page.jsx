"use client"
import Footer from '@/components/Footer'
import NavBar from '@/components/Header'
import React, { useEffect, useState } from 'react'
import axios from "axios";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Page = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(process.env.NEXTAUTH_URL);
        const { data } = await axios.get('https://wee-gro-ibtt.vercel.app/api/webscrapping');
        console.log("Products fetched:", data.policy);
        setData(data.policy);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching products:", error);
      }
      setData([["1","Feb-16","CBDT","Amendment in Section 54GB Income Tax Act,1961",""],["2","Mar-16","CBDT","Amendment in Taxation of Convertible Notes ",""],["3","May-16","CBDT","Introduction of Section 54EE of Income Tax Act,1961",""],["4","Jun-16","RBI","Relaxation for Startups for opening a foreign currency account",""],["5","Oct-16","RBI","External Commercial Borrowings (ECB) by Startups",""],["6","Jan-17","SEBI","Relaxation in the requirements of minimum investment amount by an Angel Fund in any venture capital undertaking ",""],["7","Jan-17","SEBI","Increase in the upper limit for number of angel investors in a scheme",""],["8","Jan-17","SEBI","Angel Funds can invest in overseas venture capital undertakings ",""],["9","Jan-17","SEBI","Relaxation in Lock in period for investments made by an Angel Fund ",""],["10","Mar-17","CBDT","MAT Credit carry forward period extended.",""],["11","Jun-17","MCA","Relaxation in conducting number of Board Meeting in a year",""],["12","Jun-17","MCA","Relaxation in signing of annual return of a Startup Company",""],["13","Jun-17","MCA","Exemption for Startups from procedural compliance for raising deposits",""],["14","Jun-17","MCA","MCA defined Startup for the purpose of Financial Statements",""],["15","Jun-17","MCA","Startup Company need not include Cash Flow Statement in the Financial Statements",""],["16","Aug-17","RBI","Investment by FVCI in Startups",""],["17","Sep-17","MCA","Relaxation in accepting deposits for Startups from its members",""],["18","Feb-18","CBDT"," Rate of Income Tax for domestic company having total turnover or the gross receipt up to Rs. 250 crore",""],["19","Apr-18","CBDT","Extension for claiming the Tax Exemption under section 80-IAC of Income Tax Act",""],["20","Apr-18","CBDT"," Harmonization of definition of eligible business in line with DPIIT",""],["21","Nov-18","Ministry of Electronics and Information Technology","Revision in the Electronic Development Fund ",""],["22","Nov-18","SEBI","Operating Guidelines for Alternative Investment Funds in International Financial Services Centres ",""],["23","Feb-19","RBI","Filing of SOFTEX Form in Electronic Form",""],["24","Feb-19","DPIIT","Amendment in the definition of a Startup",""],["25","Feb-19","CBDT","Exemption from tax under the provisions of section 56(2)(viib) to Startups for issue of shares above fair market value on the basis of a self-declaration to the Central Board of Direct Taxes. The aggregate amount of paid up share capital and share premium of the startup after issue or proposed issue should not exceed Rs. 25 Crore ",""],["26","May-19","MCA","Redefining on Name Reservation Rules",""],["27","Aug-19","MCA","Amendment in the Companies (Share Capital and Debentures) Rules, 2014",""],["28","Aug-19","CBDT","Relaxation on tax applicable on investment made by Category 1 and Category 2 AIFs in Startups",""],["29","Aug-19","CBDT","Pass through of losses allowed to Category I and II AIFs",""],["30","Aug-19","CBDT","Amendment in Section 79 of Income Tax Act for Eligible Startups to carry forward their losses",""],["31","Aug-19","CBDT","Amendment in Section 54GB of Income Tax Act",""],["32","Oct-19","MCA","Corporate Social Responsibility: Funding Incubators",""],["33","Feb-20","MCA","Revamping the Incorporation Process",""],["34","Feb-20","CBDT","Tax benefit for issuance of ESOPs for Startups",""],["35","Feb-20","CBDT","Extension of turnover criteria for Startups under section 80-IAC of the Income Tax Act",""],["36","Feb-20","CBDT","Extension of age criteria for Startups under section 80-IAC of the Income Tax Act",""],["37","Jun-20","MCA","Amendment in Companies (Share Capital and Debentures) Rules, 2014 for issuance of Sweat Equity shares. ",""],["38","Sep-20","MCA","Amendment in Companies (Acceptance of Deposits) Rules, 2014 for issuance of deposits.",""],["39","Sep-20","MCA","Amendment in Companies (Acceptance of Deposits) Rules, 2014 for issuance of convertible note  ",""],["40","Feb-21","MCA","Relaxation in Incorporation of One Person Companies (OPCs) ",""],["41","Feb-21","CBDT","Extension of claiming Capital gains exemption for investment in startups ",""],["42","Feb-21","CBDT","Extension of the eligibility period to claim income exemption for startups under Section 80-IAC of the Income Tax Act.",""],["43","Mar-21","Department of Economics Affairs","Non-government provident funds, superannuation and gratuity funds can invest up to 5%  of their investible surplus in Category I and II AIFs ",""],["44","Apr-21","Ministry of Labour and Employment","EPFO can invest up to 5% of their investible surplus in Category I and II AIFs",""],["45","Apr-21","Insurance Regulatory and Development Authority","Insurance companies can invest in Fund-of-Funds ",""],["46","May-21","SEBI","Relaxation in the list of restricted activities or sectors from the definition of Venture Capital Undertaking under AIF Regulations",""],["47","May-21","SEBI","Harmonization of Startup definition under AIF Regulations ",""],["48","Aug-21","Department of Expenditure","Harmonization of Startup Definition under the Manual for Procurement of Consultancy and other Services ",""],["49","Sep-21","DPIIT","Patent Fees For Educational Institutions Reduced by 80 Percent",""],["50","Feb-22","MoF","The Finance Bill 2022 capped the surcharge on the long term capital gain at 15% for unlisted companies from existing 37%. The effective rate of tax has been reduced from 28.5% to 23.9%. ",""],["51","Feb-22","MoF","The Finance Bill 2022 provides for extension of the eligibility period to claim tax holiday for the startups by one more year",""],["52","Mar-22","DPIIT","Under FDI Policy, tenure of Startup has been aligned with DPIIT Notification dated 19th February,2019 for the purpose of definition of convertible notes. ",""],["53","Aug-22","MCA","The Ministry of Corporate Affairs issued a notification on 30th August, 2022 harmonizing the definition of startup with the DPIIT notification dated 19th February 2019.",""],["54","Jan-23","RBI","RBI has rationalised the reporting process in Single Master Form (SMF) on FIRMS Portal for Foreign Investment in India.",""],["55","Feb-23","MoF","The Finance Bill 2023 proposes to amend Section 79 of the Income Tax Act, 1961 and extend the period for eligible Startups to carry forward and set off losses incurred in the first 10 years vis-a-vis 7 years of their incorporation.",""],["56","Feb-23","MoF","The Finance Bill 2023 proposes to amend Section 80-IAC of the Income Tax Act, 1961 and extend the period of incorporation of the eligible Startups by one more year, that is, up to 31st March 2024. Eligible startups incorporated within this period will be provided a tax incentive for three consecutive years out of ten years from the date of incorporation.",""],["57","Feb-23","MoF","The Finance Bill 2023 proposes to cap the surcharge on the long-term capital gain at 25% for unlisted companies from existing 37% under the new tax regime. The effective rate of tax has been reduced from 42.74% to 39.0%.",""],["58","Sep-23","CBDT","The Central Board of Direct Taxes via G.S.R. 685(E) dated 25th September 2023 amended Income Tax Rules, 1961 to include five additional valuation mechanisms for investments raised by Non-Resident Investors, thereby aligning it with internationally accepted valuation methodologies.",""],["59","Feb-24","CBDT","The Finance Act 2024 amended Section 80-IAC of the Income Tax Act, 1961 and extend the period of incorporation of the eligible Startups by one more year, that is, up to 31st March 2025. Eligible startups incorporated within this period will be provided a tax incentive for three consecutive years out of ten years from the date of incorporation.",""]])
    };
  
    fetchProducts();
  
    return () => {
      console.log("Cleanup on component unmount");
    };
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
      <NavBar />
      <div className='min-h-[100vh]'>
        <div className="container h-auto">
          <br />
          <header className="mb-8 text-center ">
            <h1 className="text-3xl font-bold">BELOW ARE SOME OF THE STARTUP RELATED REGULATIONS AND NOTIFICATIONS</h1>
            <div className="imp">
        scrapped from  - <br></br>
        <a href="https://www.startupindia.gov.in/content/sih/en/startupgov/regulatory_updates.html" className='hover:text-red-700'>Click Here</a>
      </div>
          </header>
          <div className="wrapper pl-8">
            {!loading  ?
              (
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="right">S.No.</StyledTableCell>
                        <StyledTableCell align="right">Date of Amendment</StyledTableCell>
                        <StyledTableCell align="right">Ministry/Department</StyledTableCell>
                        <StyledTableCell align="right">Notification</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((product) => (
                        <StyledTableRow key={product.name}>
                          <StyledTableCell component="th" scope="row">
                            {product[0]}
                          </StyledTableCell>
                          <StyledTableCell align="right">{product[1]}</StyledTableCell>
                          <StyledTableCell align="right">{product[2]}</StyledTableCell>
                          <TableCell align="right">
                            {product[3]}
                          </TableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (<div className="flex justify-center items-center h-64">
                <div role="status">
                  <svg aria-hidden="true" class="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>)}

          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default Page;
