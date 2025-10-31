using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TravelApp.Migrations
{
    /// <inheritdoc />
    public partial class ModifyFloatToStringDestinationEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Longitude",
                table: "Destinations",
                type: "character varying(128)",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real",
                oldMaxLength: 128);

            migrationBuilder.AlterColumn<string>(
                name: "Latitude",
                table: "Destinations",
                type: "character varying(128)",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real",
                oldMaxLength: 128);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "Longitude",
                table: "Destinations",
                type: "real",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(128)",
                oldMaxLength: 128);

            migrationBuilder.AlterColumn<float>(
                name: "Latitude",
                table: "Destinations",
                type: "real",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(128)",
                oldMaxLength: 128);
        }
    }
}
