import Image from "next/image";
import styles from "@/app/styles/page.module.css";
import "@/app/styles/styles.css";
import Result from "@/app/models/result";
import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SampledByResult(props: any) {
  const result: Result = props.result || {};

  return (
    <Link href={`/samples/${result.id}`}>
      <div className={styles.card} style={{ height: '250px'}}>
        <div style={{alignContent: 'center'}}>
            <Image
              src={result.imgUrl}
              alt=""
              width={100}
              height={100}
              style={{
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: '1rem',
                border: "1px solid #eaeaea",
              }}
            />
        </div>
        <div 
          style={{ 
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
          <h5 className={`${inter.className} overflow-ellipsis`}>{result.title}</h5>
          <p className={`${inter.className} overflow-ellipsis hidden`}>{result.artist}</p>
          <p className={`${inter.className} overflow-ellipsis hidden`}>{result.year}</p>
        </div>
      </div>
    </Link>
  );
}