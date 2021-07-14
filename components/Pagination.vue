<template>
    <div class="pagination" :class="noPagination ? 'display-none' : ''">
        <div class="summary">
            {{ paginationData.currentPage * 20 - 19 }} -
            {{
                paginationData.totalPages === paginationData.currentPage
                    ? paginationData.totalItems
                    : paginationData.currentPage * 20
            }}
            of {{ paginationData.totalItems }} items
        </div>
        <div class="navigation">
            <button
                class="prev"
                :disabled="paginationData.currentPage === 1"
                @click="getLeads({ page: paginationData.currentPage - 1 })"
            >
                <img
                    src="~/assets/images/arrow-left.svg"
                    alt="previous navigation icon"
                />
            </button>
            <ul v-if="paginationData">
                <li
                    :class="{ active: paginationData.currentPage === 1 }"
                    v-if="paginationData.totalPages >= 1"
                >
                    <button @click="getLeads({ page: 1 })">1</button>
                </li>
                <li
                    :class="{ active: paginationData.currentPage === 2 }"
                    v-if="paginationData.totalPages >= 2"
                >
                    <button @click="getLeads({ page: 2 })">2</button>
                </li>
                <li
                    :class="{ active: paginationData.currentPage === 3 }"
                    v-if="paginationData.totalPages >= 3"
                >
                    <button @click="getLeads({ page: 3 })">3</button>
                </li>
                <li
                    :class="{ active: paginationData.currentPage === 4 }"
                    v-if="paginationData.totalPages >= 4"
                >
                    <button @click="getLeads({ page: 4 })">4</button>
                </li>
                <li
                    :class="{ active: paginationData.currentPage === 5 }"
                    v-if="paginationData.totalPages >= 5"
                >
                    <button @click="getLeads({ page: 5 })">5</button>
                </li>
                <li v-if="paginationData.totalPages > 5">...</li>
                <li v-if="paginationData.totalPages > 5">
                    <button
                        @click="
                            getLeads({
                                page: paginationData.totalPages,
                            })
                        "
                    >
                        {{ paginationData.totalPages }}
                    </button>
                </li>
            </ul>
            <button
                :disabled="
                    paginationData.currentPage === paginationData.totalPages
                "
                @click="getLeads({ page: paginationData.currentPage + 1 })"
            >
                <img
                    src="~/assets/images/arrow-right.svg"
                    alt="next navigation icon"
                />
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'nuxt-property-decorator'
export default class Products extends Vue {
    @Prop(Array) readonly paginationData!: []
}
</script>

<style lang="scss" scoped>
.pagination {
    margin-top: 10px;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
    padding: 0 0 35px;

    @media (min-width: 450px) {
        display: flex;
        justify-content: space-between;
        padding: 0 35px 35px;
    }

    .navigation > button {
        background: transparent;
        border: 1px solid #e2e2ea;
        box-sizing: border-box;
        border-radius: 8px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.prev {
            margin-right: 14px;
        }

        &:disabled {
            border: none;
        }
    }

    .navigation {
        display: flex;
        align-items: center;
        @media (max-width: 450px) {
            justify-content: center;
        }
        ul {
            display: block;
        }

        li {
            float: left;
            margin-right: 15.5px;

            button {
                padding: 0 10px;
                color: rgba(var(--color-black-rgb), 0.48);
                line-height: 24px;
                text-align: center;
            }

            &.active {
                button {
                    color: var(--color-black);
                    font-weight: bold;
                }
            }
        }
    }

    .summary {
        color: #1e1147;
        @media (max-width: 450px) {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
        }
    }

    &.display-none {
        display: none;
    }
}
</style>
