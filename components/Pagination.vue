<template>
    <div class="pagination">
        <div class="summary">
            {{ currentPage * 10 - 9 }} -
            {{
                numberOfPages === currentPage
                    ? totalItems
                    : currentPage * 10
            }}
            of {{ totalItems }} items
        </div>
        <div class="navigation">
            <button
                class="prev"
                :disabled="currentPage === 1"
                @click="$emit('previousPage', (currentPage - 1))"
            >
                <img
                    src="~/assets/images/arrow-left.svg"
                    alt="previous navigation icon"
                />
            </button>
            <ul v-if="productList">
                <li
                    v-if="numberOfPages >= 1"
                    :class="{ active: currentPage === 1 }"
                >
                    <button @click="$emit('firstPage', 1)">1</button>
                </li>
                <li
                    v-if="numberOfPages >= 2"
                    :class="{ active: currentPage === 2 }"
                >
                    <button @click="$emit('goToPage',(2))">2</button>
                </li>
                <li
                    v-if="numberOfPages >= 3"
                    :class="{ active: currentPage === 3 }"
                >
                    <button @click="$emit('goToPage', (3))">3</button>
                </li>
                <li
                    v-if="numberOfPages >= 4"
                    :class="{ active: currentPage === 4 }"
                >
                    <button @click="$emit('goToPage', (4))">4</button>
                </li>
                <li
                    v-if="numberOfPages >= 5"
                    :class="{ active: currentPage === 5 }"
                >
                    <button @click="$emit('goToPage',(5))">5</button>
                </li>
                <li v-if="numberOfPages > 5">...</li>
                <li v-if="numberOfPages > 5">
                    <button
                        @click="
                            $emit('lastPage', (
                                numberOfPages
                            ))
                        "
                    >
                        {{ numberOfPages }}
                    </button>
                </li>
            </ul>
            <button
                :disabled="
                    currentPage === numberOfPages
                "
                @click="$emit('nextPage', ( currentPage + 1 ))"
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
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Pagination extends Vue {
    @Prop(Array) readonly productList !: [];
    @Prop(Number) readonly currentPage !: 0
    @Prop(Number) readonly totalItems !: 0
    @Prop(Number) readonly numberOfPages !: 0
    @Prop(Number) readonly numberPerPage !:  0
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
