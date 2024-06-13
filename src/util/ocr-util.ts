import { ClovaImageField, ClovaOutput } from "@/action/ocr-action";

/**
 * select를 받아 사진 url을 return
 * @param select "id" | "card" | "driver"
 * @return 사진 url
 */
export const getUrlFromSelect = (select: string) => {
  let result;

  switch (select) {
    case "id":
      result =
        "https://lh3.googleusercontent.com/fife/ALs6j_G7KxK7iB-YqAAoT3i7E4pxnnRQUhdx1K36ILRXm4vxkl7fPSoIRGKDUi0ZYT2VGQLFyVvlzedmZE27LyPCfMgl2OvRynxYgMhDxF7Crq_DVZeAElY7h6C0bypN0GDAlMJAwd9aMdMRHENPTGU6jPBKuKIwp7wimAZ8Nb1d7E2GuACuNYvwlfZvCLdhCLD1lCFJT0H-A7_DVwonicBzU-VhE6N3NRzraKJ06-Nae7_2W5g5JtVEyeQW8DwCxrQ4305UgoLuGTnDWeKVSQ3j3U60sG0xIGyGgpH0rbAJQG9np8hBl0Vw90tT45fNFNiRf8f0fySHNBzqFONGTWv1BI55sSSzobJ5Te1JvGVmSZeOnk0IN5EIGaEgS3Mn-FjxKQsDsPPxB90L5Afb4kvrCXkgHW_qApoYiyNKxX69uZU8CMghks3UmHifqlTwjug1HwTL7RFMc-kygjrLgwxqwtukgngNdH9OpmrNNhvha7oJIMBxXd7YrPfZ3TFQAjqbXlvXF-tq-TPzuo-RRYxQ9o1SzhU0nmEh0bbnt3W5q2FYJRlc7FXnbGaTgoUWPbgT0nNHRqI5zXBLiUHF5pVjDWMVnYD-ZPQfHpicOBFDLbn8lbKvWR2tHkAIWyL5f2jtWTWgew2zXwVJfwIAaL5p2PHWavL2Bf-p7yK5kBzjcgl00tJ62DVJ53UFYo2aU-kOZ-it7UVyxnr5B4oHv99qlc_tuLMQ-gZhyK8ScMsPtB6gRXd5m2ad3LdjfoYogBdgYYW-df_z8ykOEmt-LyM91Z0h5_yDcg4v2ikmRqWdjPB34nwjH-wFuLQNZ2u3B1HdW2WNS1sEEvBN84qvO7KJKCQ3BGQ9MaGa0LtGrwCuxjcb_nyZ90znKx3-ihv9xtCHaRY8j6zYy709mTqXHREpHXOxJ-oaQ2ZcME4sHK4AGRCFqNqepdhe2pB2-UYfktIeXtiWIjvhnU75LZq02x6F2XWagLqlGciUxX3HwDwOTNXd4fnXPOiX9RwBoj51bJHw157tRQBc_5E4jqNa_Myo4k-7lkS4Sq-a3jOIDbJdSak1uYaKpsL4EOJgeATgpnTk1fA9N-HIHSvWq7Hmi_GPfNZbhegyL2cGVIQ3-CJDSux7lfmQ_hGNj7S-3slpgcnMzGIy4qqFmto9JEwadPqJR6PvJVHHeZ0fBvyTo23dtKhggZ9eu-v8R_ma8m2AegmoCn_FK_0NRrlHcP4Evy-T__QVX7XAe6Qg0qAKLKKiRNaPg1y22v3Y4pNkFRBxwgUWjKgUttnN3DQ3YDzNe73WPo1hc1iIS4x-j-EEWUyyV191Pef_iK6wivia9lyYTU8zrYTLIuf1oN1Z906FfN8fauKcaiuUgoE4RDNjuwqrLRKgOVz3fTNRtTzS4rcnTzcY9fqsvzEpKhFvXRy8dqh5rKPkziqo2aMNplQWwha4wfsr43WcrHkO3TFT2EN6EtK18fuTseW3Nk2IzvLZvGob5wQKfIJm8m81MSJn7OM4KwaiNWBR7d8jlWDhswyq4mgwK9D2-RPIq4-Du1GxwcRdW2FBkWC178k-QJeykaJ36JdlwHtolQGB8Lcqiku2oO7bBxL_rSdflblEPkgRRqsyYKhqFXbMbY7ZpPU_0Cu-IM2LTlWCFx1BAXI=w3840-h1884";
      break;
    case "card":
      result =
        "https://lh3.googleusercontent.com/fife/ALs6j_GF0WWZkfMLNWVvLrSCRN_J8DKoZmjbH_nkCVHK04_eosUD572EvUfZRcuIElLAgjF5pfIRH2fnboqQ-S_nJJQhRwzLIpptTSRhBiOWFk0WbB2D7TZq4NvnsCZEkI-bOIGshU14VHiD_cU_l-h1sAghxoJIAxL3XbBUz3vV8-_Luj7ymmge4EHbBcIDqVCxA9pDtsGRoNlbqzY5Pcqxpq2LMBhtq3_ar_DZCLOCzLGtzDfHtcjFWeaOgypERMilutOutLLo86Jthepht6ZLZbUgJx3ga4D_jezLlsgK5zLZ_Y1Qv7SMBksQ-LANdOudHRJ4-TRujxs4X1MsbNfCdh3J3hyq3VvFJ5k9bHqubCgFvBdc9f7Pdr1BuA7WdWblo6pDwNWtDXntIL7zTLxM9IHskdMgfjFypcBKW6Nr4H6UgvDGbzevY21AMV8nt2MkiHz--Wjfl2az0DmTBZE25fNDU2syOi5WxC6JdzlAMwtggp30YeQuVk0ToNBN-mDqgA9H2Ie2qFZYpZqeTV-gIpnoleCdKzuTg79yVfY4_Fd58cKKMhBz-u1cTkP2Ga9p77hyB-7Q19ztqqF6jll-hUTSXSouf1e3YUxxX-40RsKIXYQadmeN1D4AaiN2W5md-s4yXWLJUatwoDLJrs_DKZUz6ASwzm334_qvbLMp_q1-ElT2ahAFr335lQcirfCt6tnCgIsHtxFRAOW9irnOzU8DiTv17EjN7CVqiamSd2DB8AAApReTqMFUEJO7N6y68OaICE2ITzl8Lr7lulQZtVBqvkfG2Maveg0Rr2itx7UljMfi92DssLdk-F5k1HmJGwtoTU1FcBamQGv5dqVk6G66Vz7Az6txt09bUJ0phJY_G557jtfVH0f2B7LJeubyoJ-ABz70orWJRkEHvUc6XUVh9aRq558_WeckBu2gMkZIJscc1dGVFEl_6x2bND0xwFMABITUmQHi73fuRMUXL_cf8C6HAZWGkn2UqHo7lnxtWdt_w-zBWa2tKQxHi_N39-_pASLM1ElGEacHJzyWVv4hKi8GF5UAFEfhps45h6Al_2MXALPQSSjAUBPHIqFbxohsKq7ZRK1TuWd3Lcd7CLEVGQvVHio53Urd85gFGTKlPjvnd1KK6QkIiN3RI3lIydq9PjbGb5HhsgbaR6S3oRUFiESZ10RTl7oRjPybpZZV8Q8QsJgTOsaUyo_LNMTW_J8EfBvuQfJEpLz6wbIlgnJbzPpIzAeKY5FTQ9fz5XZVSuVhRkFuPqG_C7x6fevH1pVqr7Js4n9x8aHyN1IpP-aPAuqBIQML3f4OWtK9dEBB5el5k_e_G3yUr4LpGfCWQt-Bu5ch1Np19miCoa2BcudvQQwWBoKRCiPxPMQ308l77ZM8GxHdljIsvQ_OUHjYqoZvjTWHvAJiaByBI0B43b7u8KhwgC16L8lUkCZUBx5M1qych7ZknTGY6TLSeOwj2Pss148bhkgumzR7pT1-Bc57paPDqtyEPcv2lHeo5Ahrvqvsqk8vt1ihWuU0lWJGh24PxQdDsiM-iAEsfFfSux9vXgn7CFndzKO_ZQQ95sBccRX-7b2U5eD2qSEHSSgFRoulUSdPpT2pLdvyzMWDrFxtP-XhHLQF71qtdJAERsJHCza7snpJOqVTbfg=w3840-h1884";
      break;
    case "driver":
      result =
        "https://lh3.googleusercontent.com/fife/ALs6j_GIq65uDjOXcYjYSZMao8Hpx7GRP52VlbZwC9xByr4ekJlngAn8k7h0BnErTGdEgbVGKKOMM30hlsTG503AkhaadMqUBDXbZSFKOgv9WQOZpeohEbJZLgGw-GfCds_RWSaqyleov2jBGUeK_WW_Ux0DBiA5euyKiHhD0Zii7N5V04kt9wRmTvKSOrbCKbDbOJg8iC77aZsOqJxmJwK3ynmf26mWRGiAGHFlWKKriP9RiJtIhsnFke2c1eyTfK-s118NVDBeEAS7Zq9zyL3Le83PZvVF_jWrF1ex9L2MCPELBXp9BZFjYjbdy5njCcVtAWq43OHmCbcbgU25w_ER7bkER02e4qakqE0ei6airi-RYG3smFQ_kkdLh9aLKI0S6r0TChDv-lK86lMefaozSfzKpPUPI9aYMfVz8t8dsLP-DpeNFpXWnqjxgpYK_6BMifXDC98hmAW9lw4pNWTzxsYjepe_B02Nz5T6d1qdJIzNGvWpSsp32R80x2XJuvU6W4sknflxvEjIHPNAdExhRQyMYyiaSwPyLIsoswTPBiw16pwyPeuBDi4EWIIsmx9s4nkAb_ed_s0A1_5HdYwsLVxXB0PIAy66MjcZg9HUcH476NlCfOVKdmKa0393ROIXPIlJ-0u9iCwTshMFRVT4M3t2uhpqRAqW7MoRd-L9kkgqPpq1RNOBON9EyXglsn77FnRo_zE6Dq_OzuHiwvRvri7SHrln5iLsprF4m2tyc3r33M-64F7Vb5whnoXAJ2Uw7KHCwygsxuUaSeMlqIdcfhkdQtDIGRyBz-P49dENP-rJ9Orm0dbRNZsdTRUA_uxJNBeAlEsRDpp4SZpNttFlq2lp7zc0p7OCEJf3nDFZoH-Lrtjspe-U1_wz2Hke1CJCGcQDzyAQfA6VgJqt0xyTqkwwAudDRlJhiJQRW0UlxuU-0KJNY9L6L43lXY4selEOjgElCXcwhFj61DI3F3HjRO2nWLG2PsJMub7pb9ndK4KLFdG10KhE64Z8VxLxigRV66GbmNtkntr7zTfJ59SrZ9ZpebHJf9q_GVb_6ce9V2uJQu_4WFQjxTRzVmCwTgCDVXuHkcnM6tAQNsEockjqNDyjJdeOwcf1Uw7y6_3XkUmU9qniwqHzviLLxZvpeTWGH6US9PJczkrXFbrgCPCLHL0HA_1OR4ZNRJYjDnvRDgnITZJ3xbBmI6W8LxNTvCU_QIrWxQFJohiq5bUWeXDlAbdeCdVeG1ph_QHk1NPKnrQhWNDl0m7PBKAyhDtYcdpnR5VhSLY0O__aITyzzTiJ4FomUol5G1QaP9_iL1DcwOYO22pQpTX5Tcv1js_sXFNqealYLRxlmHbbVGJPFxD-6YugGL2EIVwjA3zvLMcPpahbRBfkWSIauZzCF-yZ3h2MJy1K_TsgGZdjr6k57qf1fD2ru48wnYhgjLPg8nPzESntpCHZUy-ODbagGF2yfFM_rZs_aGuRT5Lq4TSRknoUqfrs2rzEL7Awap8L9dwbxczwPCJos6ihYRMbNLJxELMdK7HqXHjhBHjmD59ZQSJ-cdZfiUkTg9xYW1W0kPpLTGCGZo-IzOGvIx-USeGscrXcyBZOK06_Q0PP3NeUGmpSLZAxXziawgyix-u3woIXv6_MBdPwxF8BmQZ9Dg=w3840-h1884";
      break;

    default:
      result = "";
      break;
  }

  return result;
};

/**
 * ImageField 에서 동일한 Y축을 가진 4개의 Field 추출
 * @param fields ClovaImageField[]
 * @return 4개의 동일한 Y축을 가진 ImageField
 */
export const findConsistentYFields = (
  fields: ClovaImageField[]
): ClovaImageField[] | null => {
  const yValues = fields
    .map((field) => field.boundingPoly.vertices[0].y)
    .sort((a, b) => a - b);

  for (let i = 0; i <= yValues.length - 4; i++) {
    const group = yValues.slice(i, i + 4);

    const isConsistent = group.every((y, idx, arr) => {
      if (idx === 0) return true;
      return Math.abs(y - arr[idx - 1]) <= 3;
    });

    if (isConsistent) {
      const consistentFields = fields.filter((field) =>
        group.includes(field.boundingPoly.vertices[0].y)
      );

      if (consistentFields.length === 4) {
        return consistentFields;
      }
    }
  }

  return null;
};

export const extractInferTextAndCombine = (
  cardNumber: ClovaImageField[]
): string => {
  return cardNumber.map((field) => field.inferText).join(" ");
};

export const extractExpirationDate = (
  fields: ClovaImageField[]
): string | null => {
  const fieldWithExpirationDate = fields.find((field) =>
    field.inferText.includes("/")
  );
  return fieldWithExpirationDate ? fieldWithExpirationDate.inferText : null;
};

interface ExtractField {
  title: string;
  text: string;
}

export interface ClovaOCRData {
  type: string;
  fields: ExtractField[];
}

type ExtractDataFromSelect = (
  select: string,
  data: ClovaOutput
) => ClovaOCRData | null;

/**
 * select에 따라 필요한 객체 반환
 * @param select "id" | "card" | "driver"
 * @param data ClovaOutput
 * @return 타입과 fields 배열을 가진 객체 return
 */
export const extractDataFromSelect: ExtractDataFromSelect = (select, data) => {
  let result;

  switch (select) {
    case "id":
      const name = data.images[0].fields[1].inferText;
      const socialNumber = data.images[0].fields[2].inferText;

      result = {
        type: select,
        fields: [
          {
            title: "이름",
            text: name,
          },
          {
            title: "주민등록번호",
            text: socialNumber,
          },
        ],
      };
      break;
    case "card":
      const yFields = findConsistentYFields(data.images[0].fields);
      const cardNumber = extractInferTextAndCombine(yFields!);
      const careDate = extractExpirationDate(data.images[0].fields);

      result = {
        type: select,
        fields: [
          {
            title: "카드 번호",
            text: cardNumber,
          },
          {
            title: "카드 유효기간",
            text: careDate || "N/A",
          },
        ],
      };
      break;
    case "driver":
      result = null;
      break;

    default:
      result = null;
      break;
  }

  return result;
};
