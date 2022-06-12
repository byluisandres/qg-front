<template>
  <Authenticated>
    <section class="flex justify-end items-center mb-5">
      <o-button size="mediun" icon-left="plus">
        <router-link :to="{ name: 'cuentas-bancarias-new' }">
          Nueva Cuenta
        </router-link>
      </o-button>
    </section>
    <section>
      <o-table :data="data" :paginated="true" :per-page="2" :current-page="1" :pagination-simple="true"
        :pagination-position="'bottom'" :default-sort-direction="'asc'" :sort-icon="'arrow-up'"
        :sort-icon-size="'small'" default-sort="user.first_name" aria-next-label="Next page"
        aria-previous-label="Previous page" aria-page-label="Page" aria-current-label="Current page" :striped="true"
        :hoverable="true" :loading="false">
        <o-table-column field="descripcion" label="Description" v-slot="props">
          {{ props.row.description }}
        </o-table-column>
        <o-table-column field="swift" label="Swift" v-slot="props">
          {{ props.row.swift }}
        </o-table-column>
        <o-table-column field="iban" label="Iban" v-slot="props">
          {{ props.row.iban }}
        </o-table-column>
        <o-table-column field="actions" label="Actions" v-slot="props">
          <div class="block">
            <o-icon pack="mdi" icon="pencil" variant="info" @click="editCuenta(props.row)"> </o-icon>
            <o-icon pack="mdi" icon="delete" variant="danger" @click="deleteCuenta(props.row)"> </o-icon>
          </div>
        </o-table-column>
      </o-table>

    </section>

  </Authenticated>
</template>

<script>
import Authenticated from '../../../Layouts/Authenticated.vue'
export default {
  components: {
    Authenticated,
  },
  data() {
    return {
      data: [
        {
          id: 1,
          description: 'Jesse',
          swift: 'Simmons',
          iban: 'fdgfgd',
        },
        {
          id: 2,
          description: 'Jessdsffe',
          swift: 'Simmosdfsdns',
          iban: 'fdgfgdsfsdfsdfsdfd',
        },
        {
          id: 3,
          description: 'Jessdsffe',
          swift: 'Simmosdfsdns',
          iban: 'fdgfgdsfsdfsdfsdfd',
        },
      ],
    }
  },
  methods: {
    editCuenta(cuenta) {
      this.$router.push({ name: 'cuentas-bancarias-edit', params: { id: cuenta.id } })
    },
    deleteCuenta(cuenta) {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      console.log("delete:", cuenta)
    }
  }

}

</script>

<style>
</style>