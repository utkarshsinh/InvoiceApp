<template>
  <router-link class="invoice flex" :to="{ name: 'InvoiceList', params: { invoiceId: invoiceList.invoiceId } }">
    <div class="left flex">
      <span class="tracking-number">#{{ invoiceList.invoiceId }}</span>
      <span class="due-date">{{ invoiceList.paymentDueDate }}</span>
      <span class="person">{{ invoiceList.clientName }}</span>
    </div>
    <div class="right flex">
      <span class="price">${{ invoiceList.invoiceTotal }}</span>
      <div
        class="status-button flex" :class="{ paid: invoiceList.invoicePaid, draft: invoiceList.invoiceDraft, pending: invoiceList.invoicePending }">
        <span v-if="invoiceList.invoicePaid">Paid</span>
        <span v-if="invoiceList.invoiceDraft">Draft</span>
        <span v-if="invoiceList.invoicePending">Pending</span>
      </div>
      <div class="icon">
        <img src="@/assets/icon-arrow-right.svg" alt="" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "invoiceList",
  props: ["invoiceList"]
}
</script>


<style lang="scss" scoped>
.invoice {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 28px 32px;
  background-color: #1e2139;
  align-items: center;

  span {
    font-size: 13px;
  }

  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 16px;

    span {
      flex: 1;
    }

    .tracking-number {
      text-transform: uppercase;
    }
  }

  .right {
    gap: 16px;
    flex-basis: 40%;
    align-items: center;

    .price {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}
</style>