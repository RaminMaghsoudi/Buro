import { Icons } from "@/data/DATA";
import { Box } from "@mui/material";
import PriceList from "./price-list";
import classess from "./price-list-page.module.css"

export default function PriceListPage({decodedSlug}) {
  const icon41 = Icons.find((item) => item.id === 41);
  const Icon41 = icon41?.icon;

  return (
    <Box className={classess["price-list"]}>
      <Box className={classess["price-list-items"]}>
        <Box className={classess["price-list-items-search"]}>
          <Box className={classess.searchContainer}>
            {Icon41 && <Icon41 size={24} />}
            <input className={classess.search} placeholder="Suchbegriffe ..." />
          </Box>
        </Box>
        <Box className={classess["price-list-items-item"]}>
          <PriceList
            span="سامانه سخا و تعویض پلاک"
            sub="www.sakha.epolice.ir"
            idicon={48}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="بیمه ورزشی"
            sub="www.bimeh.ir"
            idicon={46}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="ثبت احوال NCR"
            sub="wwwncrcom"
            idicon={44}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="سامانه ملی مجوزها"
            sub="wwwmojavezhair"
            idicon={45}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="سامانه سپتام"
            sub="wwwseptamir"
            idicon={43}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="پلیس اماکن"
            sub="wwwepoliceir"
            idicon={42}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="بیمه ورزشی"
            sub="www.bimeh.ir"
            idicon={40}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="ثبت احوال NCR"
            sub="wwwncrcom"
            idicon={39}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="سامانه ملی مجوزها"
            sub="wwwmojavezhair"
            idicon={38}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="سامانه ملی مجوزها"
            sub="wwwmojavezhair"
            idicon={37}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="سامانه سپتام"
            sub="wwwseptamir"
            idicon={36}
            decodedSlug={decodedSlug}
          />
          <PriceList
            span="پلیس اماکن"
            sub="wwwepoliceir"
            idicon={33}
            decodedSlug={decodedSlug}
          />
        </Box>
      </Box>
      <Box className={classess["price-list-info"]}></Box>
    </Box>
  );
}
