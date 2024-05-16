import { useCallback, useRef, useState } from 'react';

import {
  type UsePaginationProperties,
  type UsePaginationReturn,
} from './libs/types/types.js';

const DEFAULT_PAGINATION_SKIP = 0;
const DEFAULT_PAGINATION_TAKE = 4;

const usePagination = ({
  defaultSkip = DEFAULT_PAGINATION_SKIP,
  defaultTake = DEFAULT_PAGINATION_TAKE,
}: UsePaginationProperties = {}): UsePaginationReturn => {
  const [hasMore, setHasMore] = useState(false);
  const paginationParameters = useRef({
    skip: defaultSkip,
    take: defaultTake,
  });
  const resetSkip = (): void => {
    paginationParameters.current.skip = 0;
    setHasMore(false);
  };

  const loadMore = useCallback(
    async (
      callback: (skip: number, take: number) => Promise<boolean>,
    ): Promise<void> => {
      const { skip, take } = paginationParameters.current;

      const hasMore = await callback(skip, take);
      setHasMore(hasMore);

      if (hasMore) {
        paginationParameters.current.skip = skip + take;
      }
    },
    [paginationParameters],
  );

  return { hasMore, loadMore, resetSkip };
};

export { usePagination };
