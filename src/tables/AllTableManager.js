import tableA from "./TableA.js"; // ✅ Import default from TableA
import tableB from "./TableB.js";
import tableC from "./TableC.js";
import tableD from "./TableD.js";
import tableE from "./TableE.js";
import blackMarketTableA from "./BlackTableA.js";
import blackMarketTableB from "./BlackTableB.js";
import blackMarketTableC from "./BlackTableC.js";
import blackMarketTableD from "./BlackTableD.js";
import blackMarketTableE from "./BlackTableE.js";

export const AllTables = {
    A: tableA,
    B: tableB,
    C: tableC,
    D: tableD,
    E: tableE,
    BMA: blackMarketTableA,
    BMB: blackMarketTableB,
    BMC: blackMarketTableC,
    BMD: blackMarketTableD,
    BME: blackMarketTableE,
};

export default AllTables; // ✅ Add default export
