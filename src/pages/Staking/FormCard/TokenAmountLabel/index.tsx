
import * as React from 'react';
import {
  // useErrorBoundary,
  withErrorBoundary
} from 'react-error-boundary';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import clsx from 'clsx';
import { useQuery } from 'react-query';

import ImpermaxJadeBadge from 'components/badges/ImpermaxJadeBadge';
import ErrorFallback from 'components/ErrorFallback';
import { CHAIN_IDS } from 'config/web3/chains';
import formatNumberWithFixedDecimals from 'utils/helpers/format-number-with-fixed-decimals';
import xIMXDataFetcher, {
  XIMXData,
  X_IMX_DATA_FETCHER
} from 'services/fetchers/x-imx-data-fetcher';

interface CustomProps {
  text: string;
}

const TokenAmountLabel = ({
  text,
  className,
  ...rest
}: CustomProps & Omit<React.ComponentPropsWithRef<'label'>, 'children'>): JSX.Element => {
  // const { showBoundary } = useErrorBoundary();
  const {
    chainId = CHAIN_IDS.ETHEREUM_MAIN_NET
  } = useWeb3React<Web3Provider>();

  const {
    isLoading: xIMXDataLoading,
    data: xIMXData,
    error: xIMXDataError
  } = useQuery<XIMXData, Error>(
    [
      X_IMX_DATA_FETCHER,
      chainId
    ],
    xIMXDataFetcher,
    {
      enabled: chainId !== undefined
    }
  );
  // showBoundary(xIMXDataError);

  let xIMXRateLabel: string | number = '-';
  if (xIMXDataLoading) {
    xIMXRateLabel = 'Loading...';
  } else {
    if (xIMXData === undefined) {
      throw new Error('Something went wrong!');
    }

    xIMXRateLabel = Number(xIMXData.exchangeRate);
    xIMXRateLabel = formatNumberWithFixedDecimals(6)(xIMXRateLabel);
  }

  return (
    <label
      className={clsx(
        'flex',
        'justify-between',
        'items-center',
        className
      )}
      {...rest}>
      <span
        className={clsx(
          'text-2xl',
          'font-medium'
        )}>
        {text}
      </span>
      <ImpermaxJadeBadge>1 xIBEX = {xIMXRateLabel} IBEX</ImpermaxJadeBadge>
    </label>
  );
};

export default withErrorBoundary(TokenAmountLabel, {
  FallbackComponent: ErrorFallback,
  onReset: () => {
    window.location.reload();
  }
});
