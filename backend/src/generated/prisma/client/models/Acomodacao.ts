import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums"
import type * as Prisma from "../internal/prismaNamespace"


export type AcomodacaoModel = runtime.Types.Result.DefaultSelection<Prisma.$AcomodacaoPayload>

export type AggregateAcomodacao = {
  _count: AcomodacaoCountAggregateOutputType | null
  _avg: AcomodacaoAvgAggregateOutputType | null
  _sum: AcomodacaoSumAggregateOutputType | null
  _min: AcomodacaoMinAggregateOutputType | null
  _max: AcomodacaoMaxAggregateOutputType | null
}

export type AcomodacaoAvgAggregateOutputType = {
  camaCasal: number | null
  camaSolteiro: number | null
  suite: number | null
  garagem: number | null
}

export type AcomodacaoSumAggregateOutputType = {
  camaCasal: number | null
  camaSolteiro: number | null
  suite: number | null
  garagem: number | null
}

export type AcomodacaoMinAggregateOutputType = {
  id: string | null
  nomeAcomadacao: string | null
  camaCasal: number | null
  camaSolteiro: number | null
  suite: number | null
  climatizacao: boolean | null
  garagem: number | null
}

export type AcomodacaoMaxAggregateOutputType = {
  id: string | null
  nomeAcomadacao: string | null
  camaCasal: number | null
  camaSolteiro: number | null
  suite: number | null
  climatizacao: boolean | null
  garagem: number | null
}

export type AcomodacaoCountAggregateOutputType = {
  id: number
  nomeAcomadacao: number
  camaCasal: number
  camaSolteiro: number
  suite: number
  climatizacao: number
  garagem: number
  _all: number
}


export type AcomodacaoAvgAggregateInputType = {
  camaCasal?: true
  camaSolteiro?: true
  suite?: true
  garagem?: true
}

export type AcomodacaoSumAggregateInputType = {
  camaCasal?: true
  camaSolteiro?: true
  suite?: true
  garagem?: true
}

export type AcomodacaoMinAggregateInputType = {
  id?: true
  nomeAcomadacao?: true
  camaCasal?: true
  camaSolteiro?: true
  suite?: true
  climatizacao?: true
  garagem?: true
}

export type AcomodacaoMaxAggregateInputType = {
  id?: true
  nomeAcomadacao?: true
  camaCasal?: true
  camaSolteiro?: true
  suite?: true
  climatizacao?: true
  garagem?: true
}

export type AcomodacaoCountAggregateInputType = {
  id?: true
  nomeAcomadacao?: true
  camaCasal?: true
  camaSolteiro?: true
  suite?: true
  climatizacao?: true
  garagem?: true
  _all?: true
}

export type AcomodacaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {

  where?: Prisma.AcomodacaoWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Acomodacaos to fetch.
   */
  orderBy?: Prisma.AcomodacaoOrderByWithRelationInput | Prisma.AcomodacaoOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.AcomodacaoWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Acomodacaos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Acomodacaos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned Acomodacaos
  **/
  _count?: true | AcomodacaoCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to average
  **/
  _avg?: AcomodacaoAvgAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to sum
  **/
  _sum?: AcomodacaoSumAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: AcomodacaoMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: AcomodacaoMaxAggregateInputType
}

export type GetAcomodacaoAggregateType<T extends AcomodacaoAggregateArgs> = {
      [P in keyof T & keyof AggregateAcomodacao]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateAcomodacao[P]>
    : Prisma.GetScalarType<T[P], AggregateAcomodacao[P]>
}




export type AcomodacaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.AcomodacaoWhereInput
  orderBy?: Prisma.AcomodacaoOrderByWithAggregationInput | Prisma.AcomodacaoOrderByWithAggregationInput[]
  by: Prisma.AcomodacaoScalarFieldEnum[] | Prisma.AcomodacaoScalarFieldEnum
  having?: Prisma.AcomodacaoScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: AcomodacaoCountAggregateInputType | true
  _avg?: AcomodacaoAvgAggregateInputType
  _sum?: AcomodacaoSumAggregateInputType
  _min?: AcomodacaoMinAggregateInputType
  _max?: AcomodacaoMaxAggregateInputType
}

export type AcomodacaoGroupByOutputType = {
  id: string
  nomeAcomadacao: string
  camaCasal: number
  camaSolteiro: number
  suite: number
  climatizacao: boolean
  garagem: number
  _count: AcomodacaoCountAggregateOutputType | null
  _avg: AcomodacaoAvgAggregateOutputType | null
  _sum: AcomodacaoSumAggregateOutputType | null
  _min: AcomodacaoMinAggregateOutputType | null
  _max: AcomodacaoMaxAggregateOutputType | null
}

export type GetAcomodacaoGroupByPayload<T extends AcomodacaoGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<AcomodacaoGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof AcomodacaoGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], AcomodacaoGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], AcomodacaoGroupByOutputType[P]>
      }
    >
  >



export type AcomodacaoWhereInput = {
  AND?: Prisma.AcomodacaoWhereInput | Prisma.AcomodacaoWhereInput[]
  OR?: Prisma.AcomodacaoWhereInput[]
  NOT?: Prisma.AcomodacaoWhereInput | Prisma.AcomodacaoWhereInput[]
  id?: Prisma.StringFilter<"Acomodacao"> | string
  nomeAcomadacao?: Prisma.StringFilter<"Acomodacao"> | string
  camaCasal?: Prisma.IntFilter<"Acomodacao"> | number
  camaSolteiro?: Prisma.IntFilter<"Acomodacao"> | number
  suite?: Prisma.IntFilter<"Acomodacao"> | number
  climatizacao?: Prisma.BoolFilter<"Acomodacao"> | boolean
  garagem?: Prisma.IntFilter<"Acomodacao"> | number
  hospedagens?: Prisma.HospedagemListRelationFilter
}

export type AcomodacaoOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  nomeAcomadacao?: Prisma.SortOrder
  camaCasal?: Prisma.SortOrder
  camaSolteiro?: Prisma.SortOrder
  suite?: Prisma.SortOrder
  climatizacao?: Prisma.SortOrder
  garagem?: Prisma.SortOrder
  hospedagens?: Prisma.HospedagemOrderByRelationAggregateInput
}

export type AcomodacaoWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  nomeAcomadacao?: string
  AND?: Prisma.AcomodacaoWhereInput | Prisma.AcomodacaoWhereInput[]
  OR?: Prisma.AcomodacaoWhereInput[]
  NOT?: Prisma.AcomodacaoWhereInput | Prisma.AcomodacaoWhereInput[]
  camaCasal?: Prisma.IntFilter<"Acomodacao"> | number
  camaSolteiro?: Prisma.IntFilter<"Acomodacao"> | number
  suite?: Prisma.IntFilter<"Acomodacao"> | number
  climatizacao?: Prisma.BoolFilter<"Acomodacao"> | boolean
  garagem?: Prisma.IntFilter<"Acomodacao"> | number
  hospedagens?: Prisma.HospedagemListRelationFilter
}, "id" | "nomeAcomadacao">

export type AcomodacaoOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  nomeAcomadacao?: Prisma.SortOrder
  camaCasal?: Prisma.SortOrder
  camaSolteiro?: Prisma.SortOrder
  suite?: Prisma.SortOrder
  climatizacao?: Prisma.SortOrder
  garagem?: Prisma.SortOrder
  _count?: Prisma.AcomodacaoCountOrderByAggregateInput
  _avg?: Prisma.AcomodacaoAvgOrderByAggregateInput
  _max?: Prisma.AcomodacaoMaxOrderByAggregateInput
  _min?: Prisma.AcomodacaoMinOrderByAggregateInput
  _sum?: Prisma.AcomodacaoSumOrderByAggregateInput
}

export type AcomodacaoScalarWhereWithAggregatesInput = {
  AND?: Prisma.AcomodacaoScalarWhereWithAggregatesInput | Prisma.AcomodacaoScalarWhereWithAggregatesInput[]
  OR?: Prisma.AcomodacaoScalarWhereWithAggregatesInput[]
  NOT?: Prisma.AcomodacaoScalarWhereWithAggregatesInput | Prisma.AcomodacaoScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Acomodacao"> | string
  nomeAcomadacao?: Prisma.StringWithAggregatesFilter<"Acomodacao"> | string
  camaCasal?: Prisma.IntWithAggregatesFilter<"Acomodacao"> | number
  camaSolteiro?: Prisma.IntWithAggregatesFilter<"Acomodacao"> | number
  suite?: Prisma.IntWithAggregatesFilter<"Acomodacao"> | number
  climatizacao?: Prisma.BoolWithAggregatesFilter<"Acomodacao"> | boolean
  garagem?: Prisma.IntWithAggregatesFilter<"Acomodacao"> | number
}

export type AcomodacaoCreateInput = {
  id?: string
  nomeAcomadacao: string
  camaCasal: number
  camaSolteiro: number
  suite: number
  climatizacao: boolean
  garagem: number
  hospedagens?: Prisma.HospedagemCreateNestedManyWithoutAcomodacaoInput
}

export type AcomodacaoUncheckedCreateInput = {
  id?: string
  nomeAcomadacao: string
  camaCasal: number
  camaSolteiro: number
  suite: number
  climatizacao: boolean
  garagem: number
  hospedagens?: Prisma.HospedagemUncheckedCreateNestedManyWithoutAcomodacaoInput
}

export type AcomodacaoUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nomeAcomadacao?: Prisma.StringFieldUpdateOperationsInput | string
  camaCasal?: Prisma.IntFieldUpdateOperationsInput | number
  camaSolteiro?: Prisma.IntFieldUpdateOperationsInput | number
  suite?: Prisma.IntFieldUpdateOperationsInput | number
  climatizacao?: Prisma.BoolFieldUpdateOperationsInput | boolean
  garagem?: Prisma.IntFieldUpdateOperationsInput | number
  hospedagens?: Prisma.HospedagemUpdateManyWithoutAcomodacaoNestedInput
}

export type AcomodacaoUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nomeAcomadacao?: Prisma.StringFieldUpdateOperationsInput | string
  camaCasal?: Prisma.IntFieldUpdateOperationsInput | number
  camaSolteiro?: Prisma.IntFieldUpdateOperationsInput | number
  suite?: Prisma.IntFieldUpdateOperationsInput | number
  climatizacao?: Prisma.BoolFieldUpdateOperationsInput | boolean
  garagem?: Prisma.IntFieldUpdateOperationsInput | number
  hospedagens?: Prisma.HospedagemUncheckedUpdateManyWithoutAcomodacaoNestedInput
}

export type AcomodacaoCreateManyInput = {
  id?: string
  nomeAcomadacao: string
  camaCasal: number
  camaSolteiro: number
  suite: number
  climatizacao: boolean
  garagem: number
}

export type AcomodacaoUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nomeAcomadacao?: Prisma.StringFieldUpdateOperationsInput | string
  camaCasal?: Prisma.IntFieldUpdateOperationsInput | number
  camaSolteiro?: Prisma.IntFieldUpdateOperationsInput | number
  suite?: Prisma.IntFieldUpdateOperationsInput | number
  climatizacao?: Prisma.BoolFieldUpdateOperationsInput | boolean
  garagem?: Prisma.IntFieldUpdateOperationsInput | number
}

export type AcomodacaoUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nomeAcomadacao?: Prisma.StringFieldUpdateOperationsInput | string
  camaCasal?: Prisma.IntFieldUpdateOperationsInput | number
  camaSolteiro?: Prisma.IntFieldUpdateOperationsInput | number
  suite?: Prisma.IntFieldUpdateOperationsInput | number
  climatizacao?: Prisma.BoolFieldUpdateOperationsInput | boolean
  garagem?: Prisma.IntFieldUpdateOperationsInput | number
}

export type AcomodacaoCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  nomeAcomadacao?: Prisma.SortOrder
  camaCasal?: Prisma.SortOrder
  camaSolteiro?: Prisma.SortOrder
  suite?: Prisma.SortOrder
  climatizacao?: Prisma.SortOrder
  garagem?: Prisma.SortOrder
}

export type AcomodacaoAvgOrderByAggregateInput = {
  camaCasal?: Prisma.SortOrder
  camaSolteiro?: Prisma.SortOrder
  suite?: Prisma.SortOrder
  garagem?: Prisma.SortOrder
}

export type AcomodacaoMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  nomeAcomadacao?: Prisma.SortOrder
  camaCasal?: Prisma.SortOrder
  camaSolteiro?: Prisma.SortOrder
  suite?: Prisma.SortOrder
  climatizacao?: Prisma.SortOrder
  garagem?: Prisma.SortOrder
}

export type AcomodacaoMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  nomeAcomadacao?: Prisma.SortOrder
  camaCasal?: Prisma.SortOrder
  camaSolteiro?: Prisma.SortOrder
  suite?: Prisma.SortOrder
  climatizacao?: Prisma.SortOrder
  garagem?: Prisma.SortOrder
}

export type AcomodacaoSumOrderByAggregateInput = {
  camaCasal?: Prisma.SortOrder
  camaSolteiro?: Prisma.SortOrder
  suite?: Prisma.SortOrder
  garagem?: Prisma.SortOrder
}

export type AcomodacaoScalarRelationFilter = {
  is?: Prisma.AcomodacaoWhereInput
  isNot?: Prisma.AcomodacaoWhereInput
}

export type IntFieldUpdateOperationsInput = {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type BoolFieldUpdateOperationsInput = {
  set?: boolean
}

export type AcomodacaoCreateNestedOneWithoutHospedagensInput = {
  create?: Prisma.XOR<Prisma.AcomodacaoCreateWithoutHospedagensInput, Prisma.AcomodacaoUncheckedCreateWithoutHospedagensInput>
  connectOrCreate?: Prisma.AcomodacaoCreateOrConnectWithoutHospedagensInput
  connect?: Prisma.AcomodacaoWhereUniqueInput
}

export type AcomodacaoUpdateOneRequiredWithoutHospedagensNestedInput = {
  create?: Prisma.XOR<Prisma.AcomodacaoCreateWithoutHospedagensInput, Prisma.AcomodacaoUncheckedCreateWithoutHospedagensInput>
  connectOrCreate?: Prisma.AcomodacaoCreateOrConnectWithoutHospedagensInput
  upsert?: Prisma.AcomodacaoUpsertWithoutHospedagensInput
  connect?: Prisma.AcomodacaoWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.AcomodacaoUpdateToOneWithWhereWithoutHospedagensInput, Prisma.AcomodacaoUpdateWithoutHospedagensInput>, Prisma.AcomodacaoUncheckedUpdateWithoutHospedagensInput>
}

export type AcomodacaoCreateWithoutHospedagensInput = {
  id?: string
  nomeAcomadacao: string
  camaCasal: number
  camaSolteiro: number
  suite: number
  climatizacao: boolean
  garagem: number
}

export type AcomodacaoUncheckedCreateWithoutHospedagensInput = {
  id?: string
  nomeAcomadacao: string
  camaCasal: number
  camaSolteiro: number
  suite: number
  climatizacao: boolean
  garagem: number
}

export type AcomodacaoCreateOrConnectWithoutHospedagensInput = {
  where: Prisma.AcomodacaoWhereUniqueInput
  create: Prisma.XOR<Prisma.AcomodacaoCreateWithoutHospedagensInput, Prisma.AcomodacaoUncheckedCreateWithoutHospedagensInput>
}

export type AcomodacaoUpsertWithoutHospedagensInput = {
  update: Prisma.XOR<Prisma.AcomodacaoUpdateWithoutHospedagensInput, Prisma.AcomodacaoUncheckedUpdateWithoutHospedagensInput>
  create: Prisma.XOR<Prisma.AcomodacaoCreateWithoutHospedagensInput, Prisma.AcomodacaoUncheckedCreateWithoutHospedagensInput>
  where?: Prisma.AcomodacaoWhereInput
}

export type AcomodacaoUpdateToOneWithWhereWithoutHospedagensInput = {
  where?: Prisma.AcomodacaoWhereInput
  data: Prisma.XOR<Prisma.AcomodacaoUpdateWithoutHospedagensInput, Prisma.AcomodacaoUncheckedUpdateWithoutHospedagensInput>
}

export type AcomodacaoUpdateWithoutHospedagensInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nomeAcomadacao?: Prisma.StringFieldUpdateOperationsInput | string
  camaCasal?: Prisma.IntFieldUpdateOperationsInput | number
  camaSolteiro?: Prisma.IntFieldUpdateOperationsInput | number
  suite?: Prisma.IntFieldUpdateOperationsInput | number
  climatizacao?: Prisma.BoolFieldUpdateOperationsInput | boolean
  garagem?: Prisma.IntFieldUpdateOperationsInput | number
}

export type AcomodacaoUncheckedUpdateWithoutHospedagensInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nomeAcomadacao?: Prisma.StringFieldUpdateOperationsInput | string
  camaCasal?: Prisma.IntFieldUpdateOperationsInput | number
  camaSolteiro?: Prisma.IntFieldUpdateOperationsInput | number
  suite?: Prisma.IntFieldUpdateOperationsInput | number
  climatizacao?: Prisma.BoolFieldUpdateOperationsInput | boolean
  garagem?: Prisma.IntFieldUpdateOperationsInput | number
}




export type AcomodacaoCountOutputType = {
  hospedagens: number
}

export type AcomodacaoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  hospedagens?: boolean | AcomodacaoCountOutputTypeCountHospedagensArgs
}

/**
 * AcomodacaoCountOutputType without action
 */
export type AcomodacaoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the AcomodacaoCountOutputType
   */
  select?: Prisma.AcomodacaoCountOutputTypeSelect<ExtArgs> | null
}

/**
 * AcomodacaoCountOutputType without action
 */
export type AcomodacaoCountOutputTypeCountHospedagensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.HospedagemWhereInput
}


export type AcomodacaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  nomeAcomadacao?: boolean
  camaCasal?: boolean
  camaSolteiro?: boolean
  suite?: boolean
  climatizacao?: boolean
  garagem?: boolean
  hospedagens?: boolean | Prisma.Acomodacao$hospedagensArgs<ExtArgs>
  _count?: boolean | Prisma.AcomodacaoCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["acomodacao"]>

export type AcomodacaoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  nomeAcomadacao?: boolean
  camaCasal?: boolean
  camaSolteiro?: boolean
  suite?: boolean
  climatizacao?: boolean
  garagem?: boolean
}, ExtArgs["result"]["acomodacao"]>

export type AcomodacaoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  nomeAcomadacao?: boolean
  camaCasal?: boolean
  camaSolteiro?: boolean
  suite?: boolean
  climatizacao?: boolean
  garagem?: boolean
}, ExtArgs["result"]["acomodacao"]>

export type AcomodacaoSelectScalar = {
  id?: boolean
  nomeAcomadacao?: boolean
  camaCasal?: boolean
  camaSolteiro?: boolean
  suite?: boolean
  climatizacao?: boolean
  garagem?: boolean
}

export type AcomodacaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nomeAcomadacao" | "camaCasal" | "camaSolteiro" | "suite" | "climatizacao" | "garagem", ExtArgs["result"]["acomodacao"]>
export type AcomodacaoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  hospedagens?: boolean | Prisma.Acomodacao$hospedagensArgs<ExtArgs>
  _count?: boolean | Prisma.AcomodacaoCountOutputTypeDefaultArgs<ExtArgs>
}
export type AcomodacaoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type AcomodacaoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $AcomodacaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Acomodacao"
  objects: {
    hospedagens: Prisma.$HospedagemPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    nomeAcomadacao: string
    camaCasal: number
    camaSolteiro: number
    suite: number
    climatizacao: boolean
    garagem: number
  }, ExtArgs["result"]["acomodacao"]>
  composites: {}
}

export type AcomodacaoGetPayload<S extends boolean | null | undefined | AcomodacaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload, S>

export type AcomodacaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<AcomodacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AcomodacaoCountAggregateInputType | true
  }

export interface AcomodacaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acomodacao'], meta: { name: 'Acomodacao' } }
  /**
   * Find zero or one Acomodacao that matches the filter.
   * @param {AcomodacaoFindUniqueArgs} args - Arguments to find a Acomodacao
   * @example
   * // Get one Acomodacao
   * const acomodacao = await prisma.acomodacao.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends AcomodacaoFindUniqueArgs>(args: Prisma.SelectSubset<T, AcomodacaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AcomodacaoClient<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one Acomodacao that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {AcomodacaoFindUniqueOrThrowArgs} args - Arguments to find a Acomodacao
   * @example
   * // Get one Acomodacao
   * const acomodacao = await prisma.acomodacao.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends AcomodacaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AcomodacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcomodacaoClient<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Acomodacao that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {AcomodacaoFindFirstArgs} args - Arguments to find a Acomodacao
   * @example
   * // Get one Acomodacao
   * const acomodacao = await prisma.acomodacao.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends AcomodacaoFindFirstArgs>(args?: Prisma.SelectSubset<T, AcomodacaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__AcomodacaoClient<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Acomodacao that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {AcomodacaoFindFirstOrThrowArgs} args - Arguments to find a Acomodacao
   * @example
   * // Get one Acomodacao
   * const acomodacao = await prisma.acomodacao.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends AcomodacaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AcomodacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcomodacaoClient<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more Acomodacaos that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {AcomodacaoFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Acomodacaos
   * const acomodacaos = await prisma.acomodacao.findMany()
   * 
   * // Get first 10 Acomodacaos
   * const acomodacaos = await prisma.acomodacao.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const acomodacaoWithIdOnly = await prisma.acomodacao.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends AcomodacaoFindManyArgs>(args?: Prisma.SelectSubset<T, AcomodacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a Acomodacao.
   * @param {AcomodacaoCreateArgs} args - Arguments to create a Acomodacao.
   * @example
   * // Create one Acomodacao
   * const Acomodacao = await prisma.acomodacao.create({
   *   data: {
   *     // ... data to create a Acomodacao
   *   }
   * })
   * 
   */
  create<T extends AcomodacaoCreateArgs>(args: Prisma.SelectSubset<T, AcomodacaoCreateArgs<ExtArgs>>): Prisma.Prisma__AcomodacaoClient<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many Acomodacaos.
   * @param {AcomodacaoCreateManyArgs} args - Arguments to create many Acomodacaos.
   * @example
   * // Create many Acomodacaos
   * const acomodacao = await prisma.acomodacao.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends AcomodacaoCreateManyArgs>(args?: Prisma.SelectSubset<T, AcomodacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many Acomodacaos and returns the data saved in the database.
   * @param {AcomodacaoCreateManyAndReturnArgs} args - Arguments to create many Acomodacaos.
   * @example
   * // Create many Acomodacaos
   * const acomodacao = await prisma.acomodacao.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many Acomodacaos and only return the `id`
   * const acomodacaoWithIdOnly = await prisma.acomodacao.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends AcomodacaoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AcomodacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a Acomodacao.
   * @param {AcomodacaoDeleteArgs} args - Arguments to delete one Acomodacao.
   * @example
   * // Delete one Acomodacao
   * const Acomodacao = await prisma.acomodacao.delete({
   *   where: {
   *     // ... filter to delete one Acomodacao
   *   }
   * })
   * 
   */
  delete<T extends AcomodacaoDeleteArgs>(args: Prisma.SelectSubset<T, AcomodacaoDeleteArgs<ExtArgs>>): Prisma.Prisma__AcomodacaoClient<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one Acomodacao.
   * @param {AcomodacaoUpdateArgs} args - Arguments to update one Acomodacao.
   * @example
   * // Update one Acomodacao
   * const acomodacao = await prisma.acomodacao.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends AcomodacaoUpdateArgs>(args: Prisma.SelectSubset<T, AcomodacaoUpdateArgs<ExtArgs>>): Prisma.Prisma__AcomodacaoClient<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more Acomodacaos.
   * @param {AcomodacaoDeleteManyArgs} args - Arguments to filter Acomodacaos to delete.
   * @example
   * // Delete a few Acomodacaos
   * const { count } = await prisma.acomodacao.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends AcomodacaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, AcomodacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Acomodacaos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {AcomodacaoUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Acomodacaos
   * const acomodacao = await prisma.acomodacao.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends AcomodacaoUpdateManyArgs>(args: Prisma.SelectSubset<T, AcomodacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Acomodacaos and returns the data updated in the database.
   * @param {AcomodacaoUpdateManyAndReturnArgs} args - Arguments to update many Acomodacaos.
   * @example
   * // Update many Acomodacaos
   * const acomodacao = await prisma.acomodacao.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more Acomodacaos and only return the `id`
   * const acomodacaoWithIdOnly = await prisma.acomodacao.updateManyAndReturn({
   *   select: { id: true },
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  updateManyAndReturn<T extends AcomodacaoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AcomodacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one Acomodacao.
   * @param {AcomodacaoUpsertArgs} args - Arguments to update or create a Acomodacao.
   * @example
   * // Update or create a Acomodacao
   * const acomodacao = await prisma.acomodacao.upsert({
   *   create: {
   *     // ... data to create a Acomodacao
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Acomodacao we want to update
   *   }
   * })
   */
  upsert<T extends AcomodacaoUpsertArgs>(args: Prisma.SelectSubset<T, AcomodacaoUpsertArgs<ExtArgs>>): Prisma.Prisma__AcomodacaoClient<runtime.Types.Result.GetResult<Prisma.$AcomodacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of Acomodacaos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {AcomodacaoCountArgs} args - Arguments to filter Acomodacaos to count.
   * @example
   * // Count the number of Acomodacaos
   * const count = await prisma.acomodacao.count({
   *   where: {
   *     // ... the filter for the Acomodacaos we want to count
   *   }
   * })
  **/
  count<T extends AcomodacaoCountArgs>(
    args?: Prisma.Subset<T, AcomodacaoCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], AcomodacaoCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a Acomodacao.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {AcomodacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
   * @example
   * // Ordered by age ascending
   * // Where email contains prisma.io
   * // Limited to the 10 users
   * const aggregations = await prisma.user.aggregate({
   *   _avg: {
   *     age: true,
   *   },
   *   where: {
   *     email: {
   *       contains: "prisma.io",
   *     },
   *   },
   *   orderBy: {
   *     age: "asc",
   *   },
   *   take: 10,
   * })
  **/
  aggregate<T extends AcomodacaoAggregateArgs>(args: Prisma.Subset<T, AcomodacaoAggregateArgs>): Prisma.PrismaPromise<GetAcomodacaoAggregateType<T>>

  /**
   * Group by Acomodacao.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {AcomodacaoGroupByArgs} args - Group by arguments.
   * @example
   * // Group by city, order by createdAt, get count
   * const result = await prisma.user.groupBy({
   *   by: ['city', 'createdAt'],
   *   orderBy: {
   *     createdAt: true
   *   },
   *   _count: {
   *     _all: true
   *   },
   * })
   * 
  **/
  groupBy<
    T extends AcomodacaoGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: AcomodacaoGroupByArgs['orderBy'] }
      : { orderBy?: AcomodacaoGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, AcomodacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcomodacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the Acomodacao model
 */
readonly fields: AcomodacaoFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for Acomodacao.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AcomodacaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  hospedagens<T extends Prisma.Acomodacao$hospedagensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Acomodacao$hospedagensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HospedagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




/**
 * Fields of the Acomodacao model
 */
export interface AcomodacaoFieldRefs {
  readonly id: Prisma.FieldRef<"Acomodacao", 'String'>
  readonly nomeAcomadacao: Prisma.FieldRef<"Acomodacao", 'String'>
  readonly camaCasal: Prisma.FieldRef<"Acomodacao", 'Int'>
  readonly camaSolteiro: Prisma.FieldRef<"Acomodacao", 'Int'>
  readonly suite: Prisma.FieldRef<"Acomodacao", 'Int'>
  readonly climatizacao: Prisma.FieldRef<"Acomodacao", 'Boolean'>
  readonly garagem: Prisma.FieldRef<"Acomodacao", 'Int'>
}
    

// Custom InputTypes
/**
 * Acomodacao findUnique
 */
export type AcomodacaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
  /**
   * Filter, which Acomodacao to fetch.
   */
  where: Prisma.AcomodacaoWhereUniqueInput
}

/**
 * Acomodacao findUniqueOrThrow
 */
export type AcomodacaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
  /**
   * Filter, which Acomodacao to fetch.
   */
  where: Prisma.AcomodacaoWhereUniqueInput
}

/**
 * Acomodacao findFirst
 */
export type AcomodacaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
  /**
   * Filter, which Acomodacao to fetch.
   */
  where?: Prisma.AcomodacaoWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Acomodacaos to fetch.
   */
  orderBy?: Prisma.AcomodacaoOrderByWithRelationInput | Prisma.AcomodacaoOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Acomodacaos.
   */
  cursor?: Prisma.AcomodacaoWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Acomodacaos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Acomodacaos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Acomodacaos.
   */
  distinct?: Prisma.AcomodacaoScalarFieldEnum | Prisma.AcomodacaoScalarFieldEnum[]
}

/**
 * Acomodacao findFirstOrThrow
 */
export type AcomodacaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
  /**
   * Filter, which Acomodacao to fetch.
   */
  where?: Prisma.AcomodacaoWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Acomodacaos to fetch.
   */
  orderBy?: Prisma.AcomodacaoOrderByWithRelationInput | Prisma.AcomodacaoOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Acomodacaos.
   */
  cursor?: Prisma.AcomodacaoWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Acomodacaos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Acomodacaos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Acomodacaos.
   */
  distinct?: Prisma.AcomodacaoScalarFieldEnum | Prisma.AcomodacaoScalarFieldEnum[]
}

/**
 * Acomodacao findMany
 */
export type AcomodacaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
  /**
   * Filter, which Acomodacaos to fetch.
   */
  where?: Prisma.AcomodacaoWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Acomodacaos to fetch.
   */
  orderBy?: Prisma.AcomodacaoOrderByWithRelationInput | Prisma.AcomodacaoOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing Acomodacaos.
   */
  cursor?: Prisma.AcomodacaoWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Acomodacaos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Acomodacaos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Acomodacaos.
   */
  distinct?: Prisma.AcomodacaoScalarFieldEnum | Prisma.AcomodacaoScalarFieldEnum[]
}

/**
 * Acomodacao create
 */
export type AcomodacaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
  /**
   * The data needed to create a Acomodacao.
   */
  data: Prisma.XOR<Prisma.AcomodacaoCreateInput, Prisma.AcomodacaoUncheckedCreateInput>
}

/**
 * Acomodacao createMany
 */
export type AcomodacaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many Acomodacaos.
   */
  data: Prisma.AcomodacaoCreateManyInput | Prisma.AcomodacaoCreateManyInput[]
}

/**
 * Acomodacao createManyAndReturn
 */
export type AcomodacaoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * The data used to create many Acomodacaos.
   */
  data: Prisma.AcomodacaoCreateManyInput | Prisma.AcomodacaoCreateManyInput[]
}

/**
 * Acomodacao update
 */
export type AcomodacaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
  /**
   * The data needed to update a Acomodacao.
   */
  data: Prisma.XOR<Prisma.AcomodacaoUpdateInput, Prisma.AcomodacaoUncheckedUpdateInput>
  /**
   * Choose, which Acomodacao to update.
   */
  where: Prisma.AcomodacaoWhereUniqueInput
}

/**
 * Acomodacao updateMany
 */
export type AcomodacaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update Acomodacaos.
   */
  data: Prisma.XOR<Prisma.AcomodacaoUpdateManyMutationInput, Prisma.AcomodacaoUncheckedUpdateManyInput>
  /**
   * Filter which Acomodacaos to update
   */
  where?: Prisma.AcomodacaoWhereInput
  /**
   * Limit how many Acomodacaos to update.
   */
  limit?: number
}

/**
 * Acomodacao updateManyAndReturn
 */
export type AcomodacaoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * The data used to update Acomodacaos.
   */
  data: Prisma.XOR<Prisma.AcomodacaoUpdateManyMutationInput, Prisma.AcomodacaoUncheckedUpdateManyInput>
  /**
   * Filter which Acomodacaos to update
   */
  where?: Prisma.AcomodacaoWhereInput
  /**
   * Limit how many Acomodacaos to update.
   */
  limit?: number
}

/**
 * Acomodacao upsert
 */
export type AcomodacaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
  /**
   * The filter to search for the Acomodacao to update in case it exists.
   */
  where: Prisma.AcomodacaoWhereUniqueInput
  /**
   * In case the Acomodacao found by the `where` argument doesn't exist, create a new Acomodacao with this data.
   */
  create: Prisma.XOR<Prisma.AcomodacaoCreateInput, Prisma.AcomodacaoUncheckedCreateInput>
  /**
   * In case the Acomodacao was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.AcomodacaoUpdateInput, Prisma.AcomodacaoUncheckedUpdateInput>
}

/**
 * Acomodacao delete
 */
export type AcomodacaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
  /**
   * Filter which Acomodacao to delete.
   */
  where: Prisma.AcomodacaoWhereUniqueInput
}

/**
 * Acomodacao deleteMany
 */
export type AcomodacaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which Acomodacaos to delete
   */
  where?: Prisma.AcomodacaoWhereInput
  /**
   * Limit how many Acomodacaos to delete.
   */
  limit?: number
}

/**
 * Acomodacao.hospedagens
 */
export type Acomodacao$hospedagensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Hospedagem
   */
  select?: Prisma.HospedagemSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Hospedagem
   */
  omit?: Prisma.HospedagemOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.HospedagemInclude<ExtArgs> | null
  where?: Prisma.HospedagemWhereInput
  orderBy?: Prisma.HospedagemOrderByWithRelationInput | Prisma.HospedagemOrderByWithRelationInput[]
  cursor?: Prisma.HospedagemWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.HospedagemScalarFieldEnum | Prisma.HospedagemScalarFieldEnum[]
}

/**
 * Acomodacao without action
 */
export type AcomodacaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Acomodacao
   */
  select?: Prisma.AcomodacaoSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Acomodacao
   */
  omit?: Prisma.AcomodacaoOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.AcomodacaoInclude<ExtArgs> | null
}
