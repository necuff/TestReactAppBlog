import { useMemo } from "react"
import { getPageCount } from "../utils/pages"

export const usePages = (totalCount, limit) => {

    const pagesCount = useMemo(() => {
        return getPageCount(totalCount, limit)
    }, [totalCount, limit]);
    
    return pagesCount;
}