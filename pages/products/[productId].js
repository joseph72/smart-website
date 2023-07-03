// import React from "react";
// import { useRouter } from "next/router";
// import { products } from "../../db";
// export default function ProductDetail({ clob }) {
//   const router = useRouter();

//   return (
//     <div className="max-w-5xl m-auto">
//       <div className="py-24">
//         <div className="text-3xl text-center mb-3">{clob.title}</div>
//         <p>{clob.text}</p>
//       </div>
//     </div>
//   );
// }
// export const getStaticProps = async (context) => {
//   const key = context.params.key;
//   const db = products[key];
//   return {
//     props: {
//       clob: db,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const paths = products.map((item) => {
//     return {
//       params: { key: item.key.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };
