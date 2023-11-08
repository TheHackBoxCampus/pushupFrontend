import React, { useEffect, useState, useRef } from "react";

/*
api response
*/

import { getProducts } from "../../api/consume.js";

/**
 * components nextui
 */

import { Pagination } from "@nextui-org/react";

export default function Main() {
  const [products, setProducts] = useState(null);
  const [currentIndexProduct, setCurrentIndexProduct] = useState(0);
  const paginationRef = useRef();

  useEffect(() => {
    const addProducts = async () => {
      let response_products = await getProducts();
      setProducts(response_products);
    };
    addProducts();
  }, []);

  const render = () => {
    const arr = [...paginationRef.current.childNodes];
    const childrens = [...arr[0].childNodes];
    const props = [];
    for (let y = 0; y < childrens.length; y++) {
      const prop = childrens[y].getAttribute("aria-label");
      props.push(prop);
    }

    if(props.includes("active")) {
        console.log()
    }

  };

  return (
    <>
      <div
        data-set="products"
        className="flex flex-col w-[52%] h-[88vh] justify-center m-auto"
      >
        {products && products[currentIndexProduct].name}
      </div>

      <div data-name="pagination" className="flex w-full justify-center">
        {products && (
          <Pagination
            ref={paginationRef}
            variant="faded"
            color="warning"
            total={products.length}
            initialPage={1}
          />
        )}
      </div>
    </>
  );
}
