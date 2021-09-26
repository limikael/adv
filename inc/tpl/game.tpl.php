<div class="adv-game-container">
	<div class="adv-game" style="width: 100%; height: 100%"
			<?php 
				foreach ($dataAttrs as $k=>$v)
					printf('%s="%s" ',$k,esc_attr($v));
			?>
		></div>
</div>