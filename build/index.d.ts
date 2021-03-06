/// <reference types="react" />
import { Component } from "react";
import { ImageProperties, ImageURISource } from "react-native";
export interface CachedImageURISource extends ImageURISource {
    uri: string;
}
export declare type CacheEntry = {
    source: CachedImageURISource;
    handlers: CacheHandler[];
    path: string | undefined;
    immutable: boolean;
    task?: any;
};
export declare type CacheHandler = (path: string, entry: CacheEntry) => void;
export declare class ImageCache {
    private getPath(uri, immutable?);
    private static instance;
    private constructor();
    static get(): ImageCache;
    private cache;
    clear(): any;
    on(source: CachedImageURISource, handler: CacheHandler, immutable?: boolean): void;
    dispose(uri: string, handler: CacheHandler): void;
    bust(uri: string): void;
    cancel(uri: string): void;
    private download(cache);
    private get(uri);
    private notify(uri, entry);
}
export interface CachedImageProps extends ImageProperties {
    mutable?: boolean;
}
export interface CustomCachedImageProps extends CachedImageProps {
    component: new () => Component<any, any>;
}
export interface CachedImageState {
    path: string | undefined;
}
export declare abstract class BaseCachedImage<P extends CachedImageProps> extends Component<P, CachedImageState> {
    private uri;
    private handler;
    private dispose();
    private observe(source, mutable);
    protected getProps(): any;
    private checkSource(source);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: P): void;
    componentWillUnmount(): void;
}
export declare class CachedImage extends BaseCachedImage<CachedImageProps> {
    render(): JSX.Element;
}
export declare class CachedImageBackground extends BaseCachedImage<CachedImageProps> {
    render(): JSX.Element;
}
export declare class CustomCachedImage<P extends CustomCachedImageProps> extends BaseCachedImage<P> {
    render(): JSX.Element;
}
