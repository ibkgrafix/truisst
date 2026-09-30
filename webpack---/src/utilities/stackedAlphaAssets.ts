import type { MediaAsset } from '../types/player-api-types.ts';

// The transparent ("stacked alpha") rendition is its own media file class on the backend
// (StackedAlphaVideoFile), which reaches us as this asset type.
export const STACKED_ALPHA_ASSET_TYPE = 'stacked_alpha_video';

// A stacked frame is the colour picture with its alpha matte drawn underneath it, so the
// encoded frame is twice the height of the picture the viewer sees.
export const STACKED_ALPHA_ROWS = 2;

const MAX_PIXEL_RATIO = 2;
// Mirrors READY in assets.js, which imports this module.
const READY_STATUS = 2;

export type StackedAlphaTarget = {
  devicePixelRatio?: number;
  width: number;
};

export const isStackedAlphaAsset = (asset: MediaAsset | null | undefined): boolean => {
  return asset?.type === STACKED_ALPHA_ASSET_TYPE;
};

export const readyStackedAlphaAssets = (
  assets: readonly MediaAsset[] | null | undefined,
): MediaAsset[] => {
  return (assets ?? []).filter((asset) => {
    return (
      isStackedAlphaAsset(asset) &&
      asset.status === READY_STATUS &&
      asset.public &&
      typeof asset.url === 'string'
    );
  });
};

/**
 * Picks the stacked-alpha rendition to play: the smallest ready one that still covers the
 * rendered width at the device pixel ratio (capped at 2x), or the largest when none does.
 */
export const chooseStackedAlphaAsset = (
  assets: readonly MediaAsset[] | null | undefined,
  target: StackedAlphaTarget,
): MediaAsset | undefined => {
  const candidates = readyStackedAlphaAssets(assets).sort(
    (left, right) => left.width - right.width,
  );
  if (candidates.length === 0) {
    return undefined;
  }

  const pixelRatio = Math.min(target.devicePixelRatio ?? 1, MAX_PIXEL_RATIO);
  const neededWidth = Math.max(1, target.width) * pixelRatio;

  return (
    candidates.find((asset) => asset.width >= neededWidth) ?? candidates[candidates.length - 1]
  );
};

export const stackedAlphaPictureHeight = (asset: MediaAsset): number => {
  return asset.height / STACKED_ALPHA_ROWS;
};
