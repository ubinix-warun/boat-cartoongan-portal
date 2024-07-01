import {useEffect, useState} from "react";
// import * as tf from "@tensorflow/tfjs";
// import * as tflite from "@tensorflow/tfjs-tflite";
import { clsx } from 'clsx';
import styled from 'styled-components'
import useOnchainCoffeeMemos from '../_hooks/useOnchainCoffeeMemos';
import FormBuyCoffee from './FormBuyCoffee';
import Memos from './Memos';

const IMG = styled.img`
    display: block;
    width: 224px;
    height: 224px;
    margin-right: 20px;
    border-radius: 8px;
`

const A = styled.a`
    margin-top: 6px;
    display: inline-block;
    font-size: 12px;
    color: #999;
`

const RC = styled.div`
    position: relative;
    width: 224px;
    height: 224px;
`

const TG = styled.div`
    border: 1px dashed #ccc;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #e28843;
`

const FB = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
`

export default function BuyMeCoffeeContractDemo() {
  const { memos, refetchMemos } = useOnchainCoffeeMemos();
  const [ modelStatus, setModelStatus ] = useState("Loading...");


    useEffect(() => {

        void (async () => {

            // tflite.setWasmPath(
            //     'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-tflite@0.0.1-alpha.10/dist/'
            // );
            //
            // const tfliteModel = await tflite.loadTFLiteModel(
            //     // "https://rose-obnoxious-mite-548.mypinata.cloud/ipfs/QmVLz4uFQt9nR698vv1mkVTt6KNXfsMvxwGrjsXspmQ2To",
            //     "https://rose-obnoxious-mite-548.mypinata.cloud/ipfs/Qmf8aLBTtLNnYVQeYPKot5LdakKaTj6zgMU9jHo6qZMhJA",
            //     // "ipfs://Qmf8aLBTtLNnYVQeYPKot5LdakKaTj6zgMU9jHo6qZMhJA",
            //     // "https://storage.googleapis.com/tfweb/models/cartoongan_fp16.tflite",
            // );
            //
            // console.log(tfliteModel)
            //
            // setModelStatus("cartoonize")

            setModelStatus("cartoonize");
        })();

    }, []);

    return (
    <div
      className={clsx([
        'grid grid-cols-1 items-stretch justify-start',
        'md:grid-cols-2CoffeeMd md:gap-9 lg:grid-cols-2CoffeeLg',
      ])}
    >
        <section
            className={clsx([
                'rounded-lg border border-solid border-boat-color-palette-line',
                'bg-boat-color-palette-backgroundalternate p-10',
            ])}
        >
            <h2 className="mb-5 w-fit text-2xl font-semibold text-white">CartoonGAN Model!</h2>
            <FB className="flexBody">
            <div className="pic-container">
                <IMG src="https://storage.googleapis.com/tfweb/demos/io2021/cat.jpg"
                     crossOrigin="anonymous"

                />
                <A className="credit" href="https://unsplash.com/photos/FilM6ng7VGQ" target="_blank">Credit</A>
            </div>
            <RC className="result-container">
                <TG className="trigger">{modelStatus}</TG>
                <canvas width="224px" height="224px" className="hide"/>
            </RC>
            </FB>
            <h2 className="mb-5 w-fit text-2xl font-semibold text-white">Messages from supporters</h2>

            {memos?.length > 0 && <Memos memos={memos}/>}
        </section>
        <aside>
            <div
                className={clsx([
                    'mt-10 rounded-lg border border-solid border-boat-color-palette-line',
                    'bg-boat-color-palette-backgroundalternate p-10 md:mt-0',
                ])}
        >
          <FormBuyCoffee refetchMemos={refetchMemos} />
        </div>
      </aside>
    </div>
  );
}
