export declare const Opensearch: {
    NewClient: (url: string, user: string, password: string) => {
        Create: (indexName: string, doc: any) => import("@opensearch-project/opensearch/lib/Transport").TransportRequestPromise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>;
    };
};
