import H4 from "@/component/motion/H4";
import { Box } from "@mui/material";
import classess from "./page.module.css";
import DIV from "@/component/motion/DIV";
import PriceForm from "@/component/form/priceform";
import PriceList from "@/component/peritem/price-list";
import { Icons } from "@/data/DATA";

export default async function SlugPage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const icon41 = Icons.find((item) => item.id === 41);
  const Icon41 = icon41?.icon;

  return (
    <main className={classess.SlugPage}>
      <H4
        className={classess.activity}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {decodedSlug}
      </H4>
      <DIV
        className={classess.points}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Box className={classess.P1}></Box>
        <Box className={classess.P2}></Box>
        <Box className={classess.P3}></Box>
      </DIV>

      {decodedSlug === "Neuen Preis hinzufügen" ? (
        <PriceForm />
      ) : decodedSlug === "Preis Liste" ? (
        <Box className={classess["wrapper-price-list"]}>
          <Box className={classess["wrapper-price-item"]}>
            <Box className={classess.searchContainer}>
              {Icon41 && <Icon41 size={24} />}
              <input
                className={classess.search}
                placeholder="Search Items ..."
              />
            </Box>
            <PriceList
              span="سامانه سخا و تعویض پلاک"
              sub="www.sakha.epolice.ir"
              idicon={48}
            />
            <PriceList span="بیمه ورزشی" sub="www.bimeh.ir" idicon={46} />
            <PriceList span="ثبت احوال NCR" sub="wwwncrcom" idicon={44}/>
            <PriceList span="سامانه ملی مجوزها" sub="wwwmojavezhair" idicon={45}/>
            {/*<PriceList span="سامانه سپتام" sub="wwwseptamir" />
            <PriceList span="پلیس اماکن" sub="wwwepoliceir" />
            <PriceList span="بیمه ورزشی" sub="www.bimeh.ir" />
            <PriceList span="ثبت احوال NCR" sub="wwwncrcom" />
            <PriceList span="سامانه ملی مجوزها" sub="wwwmojavezhair" />
            <PriceList span="سامانه ملی مجوزها" sub="wwwmojavezhair" />
            <PriceList span="سامانه سپتام" sub="wwwseptamir" />
            <PriceList span="پلیس اماکن" sub="wwwepoliceir" /> */}
          </Box>
          <Box className={classess["wrapper-price-info"]}></Box>
        </Box>
      ) : null}
    </main>
  );
}
